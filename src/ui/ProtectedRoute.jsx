import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { is } from "date-fns/locale";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load authenticated User

  const { isAuthenticated, isLoadingUser } = useUser();

  // 2) If there is NO  authenticated user, redirect back to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoadingUser) navigate("/login");
    },
    [isAuthenticated, isLoadingUser, navigate]
  );

  // 3) While loading, show a loading spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4) If there is an authenticated user, render the App
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
