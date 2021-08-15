import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { setCurrentChannel } from "../../redux/actions/channelActions";
import {
  ChannelItem,
  Channels,
  HamburgerButton,
  SidebarWrapper,
  UserInfo,
} from "./Sidebar.element";

const Sidebar = () => {
  const { register, errors, handleSubmit, setValue } = useForm();
  const profile = useSelector((state) => state.firebase.profile);
  const firebase = useFirebase();
  const dispatch = useDispatch();

  useFirebaseConnect([{ path: "channels" }]);
  const channels = useSelector((state) => state.firebase.ordered.channels);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && !isEmpty(channels)) {
      const { key, value } = channels[0];
      dispatch(setCurrentChannel({ key, ...value }));
      setMounted(true);
    }
  });

  useEffect(() => {
    register({ name: "name" }, { required: true });
    register(
      { name: "description" },
      { required: true, minLength: 6, maxLength: 60 }
    );
  }, []);

  const onSubmit = ({ name, description }) => {
    firebase.push("channels", {
      name,
      description,
      createdBy: {
        name: profile.name,
        avatar: profile.avatar,
      },
    });
  };

  const setActiveChannel = (channel) => {
    dispatch(setCurrentChannel(channel));
  };

  const signOut = () => {
    firebase.logout();
  };

  const modal = () => {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Channel
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Channel Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setValue(e.target.name, e.target.value)}
                    className="form-control"
                    placeholder="#Channel Name"
                    autoComplete="off"
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Channel Description:
                  </label>
                  <input
                    type="text"
                    name="description"
                    onChange={(e) => setValue(e.target.name, e.target.value)}
                    className="form-control"
                    placeholder="#Channel Description"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit(onSubmit)}
                data-bs-dismiss="modal"
              >
                Create Channel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SidebarWrapper>
      {modal()}
        <UserInfo>
          <span className="d-none d-lg-block d-md-block d-xl-block">{profile?.name}</span>
          <button
            className="btn btn-outline-secondary"
            onClick={() => signOut()}
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </UserInfo>
        <Channels>
          <div className="w-100 mb-2 d-flex align-items-center justify-content-between">
            <h3 className="d-none d-lg-block d-md-block d-xl-block">Channels</h3>
            <button
              type="button"
              className="btn btn-secondary d-none d-lg-block d-md-block d-xl-block"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          {channels?.map(({ key, value }) => (
            <ChannelItem
              key={key}
              onClick={() => setActiveChannel({ key, ...value })}
            >
              <i className="bi bi-hash"></i>
              {value.name}
            </ChannelItem>
          ))}
        </Channels>
    </SidebarWrapper>
  );
};

export default Sidebar;
