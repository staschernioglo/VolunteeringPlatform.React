import axios from "axios";
import { OrganizationRegisterDto } from "shared/models/userModel";
import { VolunteerRegisterDto } from "shared/models/userModel";
import { SimpleUserRegisterDto } from "shared/models/userModel";

const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:7091';

export async function registerOrganization(organization: OrganizationRegisterDto) {
    let response = await axios.post(`${apiUrl}/api/account/register/organization`, organization, { headers: {'Content-type': 'multipart/form-data'}} );
    return response.data;
} 

export async function registerVolunteer(volunteer: VolunteerRegisterDto) {
    let response = await axios.post(`${apiUrl}/api/account/register/volunteer`, volunteer, { headers: {'Content-type': 'multipart/form-data'}});
    return response.data;
}

export async function registerSimpleUser(user: SimpleUserRegisterDto) {
    let response = await axios.post(`${apiUrl}/api/account/register/user`, user, { headers: {'Content-type': 'multipart/form-data'}});
    return response.data;
}