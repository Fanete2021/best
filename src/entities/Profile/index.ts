import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  Profile,
  ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  getProfileData,
  getProfileIsLoading,
  getProfileError,
  ProfileCard
};