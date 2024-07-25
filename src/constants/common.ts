import { Edge } from "react-native-safe-area-context";

const WEB_URL = "https://google.app";

const TOS_URL = `${WEB_URL}/terms-and-conditions`;
const PRIVACY_POLICY_URL = `${WEB_URL}/privacy-policy`;

const DEFAULT_SAFE_AREA_EDGES: Edge[] = ["right", "left"];
const VERTICAL_SAFE_AREA_EDGES: Edge[] = ["top", "bottom"];

export { DEFAULT_SAFE_AREA_EDGES, PRIVACY_POLICY_URL, TOS_URL, VERTICAL_SAFE_AREA_EDGES };
