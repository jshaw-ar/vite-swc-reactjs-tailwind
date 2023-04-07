import { connect } from "react-redux";
import { mapStateToProps } from "../pages";

function Player({ tx }) {
  return <h1 className="text-3xl font-bold underline">Hello {tx}</h1>;
}

export default connect(mapStateToProps)(Player);
