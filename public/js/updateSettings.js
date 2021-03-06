// updateData
import axios from 'axios';
import { showAlert } from './alert';

export const updateSettings = async (data, type) => {
  //type is either password or data
  try {
    const url =
      type === 'Password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type} updated successfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
