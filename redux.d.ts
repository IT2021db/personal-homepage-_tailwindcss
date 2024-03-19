import { RootState } from "./redux/rootReducer";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
