import * as React from "react";
import Style from "./index.css";


const sidebar = () => {
  return (
    <>
     <div class="left">
          <a class="profile">
            <div class="profile-photo">
              <img src="https://picsum.photos/200" />
            </div>
            <div class="handle">
              <h4>John Doe</h4>
              <p class="text-muted">@JohnDoe</p>
            </div>
          </a>
          <div class="sidebar">
            <a class="menu-item active">
              <span><i class="uil uil-home"></i></span>
              <h3>Home</h3>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-compass"></i></span>
              <h3>Explore</h3>
            </a>
            <a class="menu-item" id="notifications">
              <span
                ><i class="uil uil-bell"
                  ><small class="notification-count">9+</small></i></span>
              <h3>Notifications</h3>
              <div class="notifications-popup">
                <div>
                  <div class="profile-photo">
                    <img src="https://picsum.photos/200" />
                  </div>
                  <div class="notification-body">
                    <b>Keke Benjamin</b> accepted your friend request
                    <small class="text-muted">2 Days Ago.</small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img src="https://picsum.photos/200" />
                  </div>
                  <div class="notification-body">
                    <b>Hana Russ</b> commented on your post
                    <small class="text-muted">4 Days Ago.</small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img src="https://picsum.photos/200" />
                  </div>
                  <div class="notification-body">
                    <b>Dana White</b> like your post
                    <small class="text-muted">1 Hour Ago.</small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img src="https://picsum.photos/200" />
                  </div>
                  <div class="notification-body">
                    <b>Maria Oppong</b> commented on your post
                    <small class="text-muted">2 Hours Ago.</small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img src="https://picsum.photos/200" />
                  </div>
                  <div class="notification-body">
                    <b>Donald Trump</b> commented on your post
                    <small class="text-muted">3 Hours Ago.</small>
                  </div>
                </div>
              </div>
            </a>
            <a class="menu-item" id="messages-notifications">
              <span
                ><i class="uil uil-envelope-alt"
                  ><small class="notification-count">6</small></i
                ></span
              >
              <h3>Message</h3>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-bookmark"></i></span>
              <h3>Bookmarks</h3>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-chart-line"></i></span>
              <h3>Analytics</h3>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-pallete"></i></span>
              <h3>Theme</h3>
            </a>
            <a class="menu-item">
              <span><i class="uil uil-setting"></i></span>
              <h3>Settings</h3>
            </a>
          </div>
          <label for="create-post" class="btn btn-primary">Create Post</label>
        </div>
    </>
  );
};

export default sidebar;
