import "./Sidebar.css"; // Add your styles here

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Left Sidebar (Profile) */}
      <div className="sidebar__left">
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="profile__image"
          />
          <div className="profile__info">
            <h2>Md Gulab</h2>
            <p>Web Developer</p>
            <p className="profile__about">
              Passionate about technology, coding, and learning new things!
            </p>
            <div className="profile__social">
              <a href="#" className="social__link">
                LinkedIn
              </a>
              <a href="#" className="social__link">
                Twitter
              </a>
              <a href="#" className="social__link">
                GitHub
              </a>
            </div>
          </div>
          <div className="profile__flowers">
            <img
              src="https://via.placeholder.com/30x30?text=🌸"
              alt="Flower"
              className="flower__icon"
            />
            <img
              src="https://via.placeholder.com/30x30?text=🌸"
              alt="Flower"
              className="flower__icon"
            />
          </div>
        </div>
        <div className="sidebar__bottom">
          <button>Connections</button>
          <button>Groups</button>
          <button>Events</button>
        </div>
      </div>

      {/* Center Section (Posts and Post Creation) */}
      <div className="sidebar__center">
        <div className="post__create">
          <textarea placeholder="Start a post" className="post__textarea" />
          <div className="post__options">
            <input type="file" id="fileUpload" accept="image/*, .pdf" />
            <button className="post__button">Post</button>
          </div>
        </div>

        <div className="sidebar__posts">
          <h3>Recent Posts</h3>

          <div className="sidebar__posts">
            {/* Post Card */}
            <div className="post__card">
              <div className="post__header">
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="User"
                  className="post__userImage"
                />
                <div className="post__userDetails">
                  <h4>Faizur Rahman</h4>
                  <p>Back-end Developer</p>
                  <p className="post__timestamp">1 hours ago</p>
                </div>
              </div>
              <p className="post__text">
                PWc - November Hiring 2024: - hiring For hashtag#Freshers -
                Interns & Experienced - Work from Home Jobs , Hybrid, or Office.
                CTC-Rs 65,000 - Rs 1,80,000 per month APPLY HERE :-{" "}
                <a href="">https://lnkd.in/d44HGvdZ</a>
              </p>
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQGvy3DXvm7fMg/feedshare-shrink_800/feedshare-shrink_800/0/1731603617981?e=1734566400&v=beta&t=cW_i4rtJMBZI4tOWAMBedgRpRbtq3DEzKMGgg3r9jF4"
                alt="Post image"
                className="post__image"
              />
              <div className="post__actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>

            {/* Post Card */}
            <div className="post__card">
              <div className="post__header">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User"
                  className="post__userImage"
                />
                <div className="post__userDetails">
                  <h4>Md Gulab</h4>
                  <p>Web Developer</p>
                  <p className="post__timestamp">2 hours ago</p>
                </div>
              </div>
              <p className="post__text">
                This is a sample post by Md Gulab, sharing insights on web
                development.
              </p>
              <img
                src="https://media.licdn.com/dms/image/sync/v2/D5610AQHBGh16rsYYsQ/image-shrink_800/image-shrink_800/0/1718620863749/LoL-SC-AdOptimization-OTW-Text-2png?e=1732212000&v=beta&t=F1gG__0R2YHD-atbRH48eP_qyat6jwphzgj3RLAb8-c"
                alt="Post image"
                className="post__image"
              />
              <div className="post__actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>

            {/* Repeat for other posts */}
          </div>
        </div>
      </div>
      <div className="sidebar__right">
        {/* Trending Section */}
        <div className="sidebar__trending">
          <h3>Trending Now</h3>
          <p className="trending__source">Curated by WebDev News</p>
          <ul className="trending__list">
            <li className="trending__item">
              <strong>AI Revolution</strong>
              <p className="trending__details">1d ago • 5,000 readers</p>
            </li>
            <li className="trending__item">
              <strong>JavaScript Frameworks</strong>
              <p className="trending__details">2d ago • 3,200 readers</p>
            </li>
            <li className="trending__item">
              <strong>Cloud Computing Advances</strong>
              <p className="trending__details">3d ago • 2,100 readers</p>
            </li>
            <li className="trending__item">
              <strong>Remote Work Trends</strong>
              <p className="trending__details">1d ago • 1,800 readers</p>
            </li>
            <li className="trending__item">
              <strong>Cybersecurity Updates</strong>
              <p className="trending__details">2d ago • 1,200 readers</p>
            </li>
          </ul>
          <button className="trending__button">Show More</button>
        </div>

        {/* Puzzles Section */}
        <div className="sidebar__puzzles">
          <h3>Today's Activities</h3>
          <ul className="puzzles__list">
            <li className="puzzles__item">
              <span className="puzzle__name">Code Challenge</span>
              <p className="puzzle__details">4 tasks completed</p>
            </li>
            <li className="puzzles__item">
              <span className="puzzle__name">Design Quiz</span>
              <p className="puzzle__details">3 tasks completed</p>
            </li>
            <li className="puzzles__item">
              <span className="puzzle__name">Debugging Marathon</span>
              <p className="puzzle__details">5 bugs resolved</p>
            </li>
          </ul>
        </div>

        {/* Advertisement Section */}
        <div className="sidebar__ad">
          <h4>Promoted</h4>
          <div className="ad__content">
            <img
              src="https://via.placeholder.com/150"
              alt="Ad"
              className="ad__image"
            />
            <p className="ad__text">
              Check out the latest updates on tech products!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
