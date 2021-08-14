import React from "react";
import {
  ChannelItem,
  Channels,
  SidebarWrapper,
  UserInfo,
} from "./Sidebar.element";

const Sidebar = () => {
  const modal = () => {
    return (
      <div
      className="modal fade"
        id="exampleModal"
        tabindex="-1"
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
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Channel Name:
                  </label>
                  <input type="text" className="form-control" placeholder="#Channel Name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" className="col-form-label">
                    Channel Description:
                  </label>
                  <input type="text" className="form-control" placeholder="#Channel Description" />
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
              <button type="button" className="btn btn-primary">
                Send message
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
      <div className="container">
        <UserInfo>
          <span>User Name</span>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </UserInfo>
        <Channels>
          <div className="w-100 mb-2 d-flex align-items-center justify-content-between">
            <h3>Channels</h3>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          <ChannelItem>
            <i className="bi bi-hash"></i>
            ChannelItem
          </ChannelItem>
          <ChannelItem>
            <i className="bi bi-hash"></i>
            ChannelItem
          </ChannelItem>
          <ChannelItem>
            <i className="bi bi-hash"></i>
            ChannelItem
          </ChannelItem>
        </Channels>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
