// CAMERA ROLL DATA - COMPLETELY INDEPENDENT
// DO NOT USE THIS IN ANY OTHER COMPONENT

// Import camera roll photos
import cameraPhoto1 from '../assets/cb8f5ce9df2c0329a7384f855a46d9a874674c8d.png';
import cameraPhoto2 from '../assets/20d384713e0a90702f3759cc1d19e26de89209e1.png';
import cameraPhoto3 from '../assets/87a5929875ebb5107010681429ec0930cf7956cc.png';
import cameraPhoto4 from '../assets/461e6eb645fa0059c0f2bb0324e7b23e92437513.png';
import cameraPhoto5 from '../assets/b51be90b56df0d058c187131df1fa36b656a3701.png';
import cameraPhoto6 from '../assets/d48073810273f6ba0e5be04906bcfe28f59c1fb8.png';

export interface CameraRollPhoto {
  rollId: string;
  rollImagePath: string;
  rollCaption: string;
}

export const CAMERA_MOMENTS: CameraRollPhoto[] = [
  {
    rollId: 'moment-a',
    rollImagePath: cameraPhoto1,
    rollCaption: 'Digii company event'
  },
  {
    rollId: 'moment-b',
    rollImagePath: cameraPhoto2,
    rollCaption: 'Transformation journey - 105kg to 75kg'
  },
  {
    rollId: 'moment-c',
    rollImagePath: cameraPhoto3,
    rollCaption: 'Luffy & Shanks collectible'
  },
  {
    rollId: 'moment-d',
    rollImagePath: cameraPhoto4,
    rollCaption: 'Camera roll moment 4'
  },
  {
    rollId: 'moment-e',
    rollImagePath: cameraPhoto5,
    rollCaption: 'Camera roll moment 5'
  },
  {
    rollId: 'moment-f',
    rollImagePath: cameraPhoto6,
    rollCaption: 'Camera roll moment 6'
  }
];
