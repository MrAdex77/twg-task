enum Icon {
  Phone = "Phone",
  Plus = "Plus",
  Profile = "Profile",
  Rooms = "Rooms",
  Search = "Search",
  Send = "Send",
  VideoCall = "VideoCall",
  VisionLow = "VisionLow",
  Vision = "Vision",
  CaretLeft = "CaretLeft",
}

const Icons: Record<Icon, string | NodeRequire> = {
  [Icon.Phone]: require("@assets/icons/phone.svg"),
  [Icon.Plus]: require("@assets/icons/plus.svg"),
  [Icon.Profile]: require("@assets/icons/profile.svg"),
  [Icon.Rooms]: require("@assets/icons/rooms.svg"),
  [Icon.Search]: require("@assets/icons/search.svg"),
  [Icon.Send]: require("@assets/icons/send.svg"),
  [Icon.VideoCall]: require("@assets/icons/videocall.svg"),
  [Icon.VisionLow]: require("@assets/icons/vision-low.svg"),
  [Icon.Vision]: require("@assets/icons/vision.svg"),
  [Icon.CaretLeft]: require("@assets/icons/Caret-left.svg"),
};

export { Icon, Icons };
