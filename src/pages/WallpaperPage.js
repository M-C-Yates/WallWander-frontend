import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../App";
import { getImage, deleteImage } from "../actions/image";

const Navbar = React.lazy(() => import("../components/Navbar"));

const Wallpaper = React.lazy(() => import("../components/wallpaper/Wallpaper"));

export const WallpaperPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const [image, setImage] =
    useState({
      url: "",
      secureUrl: "",
      title: "",
    }) || "";

  if (!image) {
    props.navigate("/");
  }

  const removeImage = async () => {
    dispatch(deleteImage(image));
    await axios.delete(`${baseUrl}/images/${props.id}`);
    hide();
    props.navigate(`/profile/${user.id}/uploads`);
  };

  useEffect(() => {
    const fetchImage = async () => {
      const image = await axios.get(`${baseUrl}/images/${props.id}`);
      dispatch(getImage(image.data));
      setImage(image.data);
    };
    fetchImage();
  }, [dispatch, props.id, setImage]);

  const isAuthor = user.id === image.authorId;
  const wallpaperData = {
    author: isAuthor,
    id: props.id,
    image,
    isAuthed: !!user,
    user: user,
  };

  return (
    <div className="wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Wallpaper
          hide={hide}
          removeImage={removeImage}
          show={show}
          visible={visible}
          wallpaperData={wallpaperData}
        />
      </Suspense>
    </div>
  );
};

export default WallpaperPage;
