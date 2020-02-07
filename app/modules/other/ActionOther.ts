import { LOGOUT, SWITCHUSERROLE } from './ConfigOther';

export const logout = () => ({ type: LOGOUT });
export const switchUserRole = (role) => ({ type: SWITCHUSERROLE, role })