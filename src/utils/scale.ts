import { Dimensions, Platform, StatusBar } from "react-native";

export const IS_IOS = Platform.OS === "ios";

export const GUIDELINE_BASE_WIDTH = 375;
export const GUIDELINE_BASE_HEIGHT = 812;

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;
export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const STATUS_BAR_HEIGHT = IS_IOS ? 20 : StatusBar.currentHeight || 24; // Default for iOS devices is typically 20, adjust if needed
export const NAVBAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;
export const REAL_HEIGHT = IS_IOS ? WINDOW_HEIGHT : WINDOW_HEIGHT - STATUS_BAR_HEIGHT;
export const IS_SMALL_DEVICE = REAL_HEIGHT < 680; // iPhone SE (2nd gen) -> 667

export const xScale = (size: number): number => (WINDOW_WIDTH / GUIDELINE_BASE_WIDTH) * size;
export const yScale = (size: number): number => (REAL_HEIGHT / GUIDELINE_BASE_HEIGHT) * size;
