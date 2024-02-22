import { REPONAME } from "shared/config/constants";

export const BASENAME = process.env.NODE_ENV === 'development' ? "" : `/${REPONAME}`;
export const NAME_FOR_404 = '404';
