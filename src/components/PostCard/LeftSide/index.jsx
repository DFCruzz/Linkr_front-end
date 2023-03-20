import { SessionContext } from "../../../hooks/SessionContext";
import { useCallback, useContext, useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import PostContext from "../../../hooks/PostContext";
import API from "../../../config/api";
import * as S from "./styles";

const LeftSide = () => {
  const { profilePicture, profile_picture, likes, id } =
    useContext(PostContext);
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useContext(SessionContext);
  const [isLiked, setIsLiked] = useState(false);

  const updateLike = useCallback(async () => {
    if (isLoading) return;
    setIsLiked(!isLiked);
    setIsLoading(true);
    try {
      await API.post(`/timeline/${id}/like`, {}, session.auth);
      setIsLoading(false);
    } catch ({ response }) {
      console.error(response);
    }
  }, [isLiked, isLoading]);

  return (
    <S.Container {...{ isLiked }}>
      <img src={profilePicture || profile_picture} />
      <div>
        {isLiked ? (
          <IoHeart onClick={updateLike} />
        ) : (
          <IoHeartOutline onClick={updateLike} />
        )}
        <p>{isLiked ? (likes ?? 0) + 1 : likes} likes</p>
      </div>
    </S.Container>
  );
};

export default LeftSide;
