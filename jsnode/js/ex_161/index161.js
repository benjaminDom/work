 const user={
    profile_sidebar_fill_color: "DDEEF6",
    profile_sidebar_border_color: "C0DEED",
    profile_background_tile: false,
    name: "Sean Cummings",
    profile_image_url: "http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
    created_at: "Mon Apr 26 06:01:55 +0000 2010",
    location: "LA, CA",
    follow_request_sent: null,
    profile_link_color: "0084B4",
    is_translator: false,
    id_str: "137238150",
    default_profile: true,
    contributors_enabled: false,
    favourites_count: 0,
    url: null,
    profile_image_url_https: "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
    utc_offset: -28800,
    id: 137238150,
    profile_use_background_image: true,
    listed_count: 2,
    profile_text_color: "333333",
    lang: "en",
    followers_count: 70,
    protected: false,
    notifications: null,
    profile_background_image_url_https: "https://si0.twimg.com/images/themes/theme1/bg.png",
    profile_background_color: "C0DEED",
    verified: false,
    geo_enabled: true,
    time_zone: "Pacific Time (US & Canada)",
    description: "Born 330 Live 310",
    default_profile_image: false,
    profile_background_image_url: "http://a0.twimg.com/images/themes/theme1/bg.png",
    statuses_count: 579,
    friends_count: 110,
    following: null,
    show_all_inline_media: false,
    screen_name: "sean_cummings"
  }


  const properties = Object.keys(user);
  properties.forEach(element => {
     console.log( element);
  });
  /* console.log(properties);
  console.log(user['profile_sidebar_fill_color']); */