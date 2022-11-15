import PropTypes from "prop-types";
export default function ProfileComponent({
  MyName,
  bio,
  Profession,
  children,
}) {
  return (
    <div>
      <h1>{MyName}</h1>
      <h2>{bio}</h2>
      <h2>{Profession}</h2>
      {children}
    </div>
  );
}
