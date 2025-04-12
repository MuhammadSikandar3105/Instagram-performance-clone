const Footer = () => {
  return (
    <div className="flex flex-col mb-14 text-xs items-center gap-3 text-[#737373] font-normal ">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <a href="">Meta</a>
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Jobs</a>
        <a href="">Help</a>
        <a href="">Api</a>
        <a href="">Privacy</a>
        <a href="">Terms</a>
        <a href="">Location</a>
        <a href="">Instagram Lite</a>
        <a href="">Threads</a>
        <a href="">Contact Uploading & None-Users</a>
        <a href="">Meta Verified</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
    </div>
  );
};

export default Footer;
