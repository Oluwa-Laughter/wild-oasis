import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUserData({ fullName, password, avatar }) {
  // 1) Update password OR fullName

  let updateData;

  if (password) updateData = { password };

  if (fullName) updateData = { data: { fullName } };

  const {
    data: updateUserPasswordOrFullName,
    error: updateUserPasswordOrFullNameError,
  } = await supabase.auth.updateUser(updateData);

  if (updateUserPasswordOrFullNameError)
    throw new Error(updateUserPasswordOrFullNameError.message);

  if (!avatar) return updateUserPasswordOrFullName;

  // 2) Upload the avatar image

  const avatarFileName = `avatar-${
    updateUserPasswordOrFullName.user.id
  }-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(avatarFileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3) Update avatar to the user data

  const { data: updateUserAvatar, error: updateUserAvatarError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${avatarFileName}`,
      },
    });

  if (updateUserAvatarError) throw new Error(updateUserAvatarError.message);

  return updateUserAvatar;
}
