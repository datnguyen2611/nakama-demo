export interface RouteItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: RouteItem[];
}
export enum Pages {
  home = "/",
  search = "/search",
  account = "/account",
  notification = "/notification",
}
