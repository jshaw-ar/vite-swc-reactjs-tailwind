import { connect } from "react-redux";
import { mapStateToProps } from "../pages";

function Feed({}) {
  return <h1 className="text-3xl font-bold underline">Feed Page</h1>;
}

export default connect(mapStateToProps)(Feed);
