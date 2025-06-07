import type { LucideIcon } from 'lucide-react';
import { Home, BookOpen, Focus, LayoutGrid, Gauge, Timer, Film, FlaskConical, MountainSnow, ClipboardCheck, Layers, MessageCircle, LibraryIcon, Sparkles, HelpCircle, FileQuestion, ImageUp, List } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  label?: string;
  external?: boolean;
  subItems?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  {
    title: 'Learn',
    href: '/learn',
    icon: BookOpen,
    subItems: [
      { title: 'Camera Lenses', href: '/learn/lenses', icon: Focus, label: 'Lenses' },
      { title: 'Composition', href: '/learn/composition', icon: LayoutGrid, label: 'Composition' },
      { title: 'ISO', href: '/learn/iso', icon: Gauge, label: 'ISO' },
      { title: 'Shutter Speed', href: '/learn/shutter-speed', icon: Timer, label: 'Shutter Speed' },
      { title: 'Film Types', href: '/learn/film-types', icon: Film, label: 'Film Types' },
      { title: 'Developing Film', href: '/learn/developing-film', icon: FlaskConical, label: 'Developing' },
      { title: 'Nature Photography', href: '/learn/nature-photography', icon: MountainSnow, label: 'Nature' },
    ],
  },
  { title: 'Tests', href: '/tests', icon: ClipboardCheck },
  { title: 'Flashcards', href: '/flashcards', icon: Layers },
  { title: 'AI Feedback', href: '/feedback', icon: Sparkles },
  { title: 'Resources', href: '/resources', icon: LibraryIcon },
];

export interface Flashcard {
  id: string;
  term: string;
  definition: string;
  category: string;
}

export const FLASHCARD_DATA: Flashcard[] = [
  { id: '1', term: 'Aperture', definition: 'The opening in a lens through which light passes to enter the camera. It is expressed in f-numbers; a smaller f-number means a larger aperture.', category: 'Exposure' },
  { id: '2', term: 'Shutter Speed', definition: 'The length of time the camera shutter is open, exposing light onto the camera sensor or film. Measured in seconds or fractions of a second.', category: 'Exposure' },
  { id: '3', term: 'ISO', definition: 'Measures the sensitivity of the image sensor or film to light. Higher ISO means more sensitivity, allowing for shooting in darker conditions but potentially increasing noise/grain.', category: 'Exposure' },
  { id: '4', term: 'Depth of Field (DOF)', definition: 'The distance between the nearest and farthest objects in a scene that appear acceptably sharp in an image.', category: 'Composition & Focus' },
  { id: '5', term: 'Rule of Thirds', definition: 'A compositional guideline that divides an image into nine equal parts by two horizontal and two vertical lines. Important elements are placed along these lines or their intersections.', category: 'Composition' },
  { id: '6', term: 'Focal Length', definition: 'The distance from the optical center of a lens to the image sensor or film when the lens is focused at infinity. Measured in millimeters (mm).', category: 'Lenses' },
  { id: '7', term: 'Grain', definition: 'The random optical texture of processed photographic film due to the presence of small particles of metallic silver.', category: 'Film' },
  { id: '8', term: 'Dodging', definition: 'A darkroom technique to decrease the exposure for certain areas of a print, making them lighter.', category: 'Developing' },
  { id: '9', term: 'Burning', definition: 'A darkroom technique to increase the exposure for certain areas of a print, making them darker.', category: 'Developing' },
];

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  topic: string;
}

export const TEST_DATA: TestQuestion[] = [
  {
    id: 'q1',
    question: 'Which f-number represents a larger aperture opening?',
    options: ['f/1.8', 'f/16', 'f/8', 'f/22'],
    correctAnswer: 'f/1.8',
    topic: 'Aperture',
  },
  {
    id: 'q2',
    question: 'A faster shutter speed (e.g., 1/1000s) is used to:',
    options: ['Blur motion', 'Freeze motion', 'Increase depth of field', 'Decrease ISO'],
    correctAnswer: 'Freeze motion',
    topic: 'Shutter Speed',
  },
  {
    id: 'q3',
    question: 'Higher ISO values are typically used in:',
    options: ['Bright sunlight', 'Low-light conditions', 'Studio portraits with flashes', 'Landscape photography on a tripod'],
    correctAnswer: 'Low-light conditions',
    topic: 'ISO',
  },
];

export const LEARNING_MODULES = [
  { title: 'Camera Lenses', href: '/learn/lenses', description: 'Understand different types of lenses and their uses.', icon: Focus, imageHint: 'camera lenses' },
  { title: 'Composition', href: '/learn/composition', description: 'Learn the art of arranging elements in your photos.', icon: LayoutGrid, imageHint: 'photography composition' },
  { title: 'ISO', href: '/learn/iso', description: 'Master ISO settings for light sensitivity.', icon: Gauge, imageHint: 'ISO dial' },
  { title: 'Shutter Speed', href: '/learn/shutter-speed', description: 'Control motion and exposure with shutter speed.', icon: Timer, imageHint: 'camera shutter' },
  { title: 'Film Types', href: '/learn/film-types', description: 'Explore various film stocks and their characteristics.', icon: Film, imageHint: 'film rolls' },
  { title: 'Developing Film', href: '/learn/developing-film', description: 'An introduction to the film developing process.', icon: FlaskConical, imageHint: 'darkroom developing' },
  { title: 'Nature Photography', href: '/learn/nature-photography', description: 'Techniques for capturing the beauty of nature.', icon: MountainSnow, imageHint: 'nature landscape' },
];

export const RESOURCE_CATEGORIES = [
  {
    name: "Photography Schools & Workshops",
    resources: [
      { name: "International Center of Photography (ICP)", url: "https://www.icp.org", description: "Offers a wide range of courses and workshops." },
      { name: "New York Institute of Photography (NYIP)", url: "https://www.nyip.edu", description: "Online photography courses for all levels." },
      { name: "Rocky Mountain School of Photography", url: "https://www.rmsp.com", description: "Intensive workshops in beautiful locations." },
    ]
  },
  {
    name: "Film Photography Websites & Communities",
    resources: [
      { name: "Emulsive", url: "https://emulsive.org", description: "A popular platform for film photographers, featuring articles, reviews, and community." },
      { name: "35mmc", url: "https://www.35mmc.com", description: "Reviews, thoughts, and experiences with 35mm compact cameras and more." },
      { name: "Analogue Wonderland", url: "https://analoguewonderland.co.uk", description: "Sells a wide variety of film and offers developing services." },
      { name: "Ilford Photo", url: "https://www.ilfordphoto.com", description: "Manufacturer of black and white film, paper, and chemicals with great resources." },
    ]
  },
  {
    name: "Inspiration & Technique",
    resources: [
      { name: "Aperture Magazine", url: "https://aperture.org", description: "A leading photography magazine and publisher." },
      { name: "Magnum Photos", url: "https://www.magnumphotos.com", description: "A legendary photographic cooperative, showcasing iconic documentary photography." },
      { name: "The Ansel Adams Gallery", url: "https://www.anseladams.com", description: "Official gallery of Ansel Adams, with prints and books." },
    ]
  }
];

export const ICONS_MAP = {
  Home, BookOpen, Focus, LayoutGrid, Gauge, Timer, Film, FlaskConical, MountainSnow, ClipboardCheck, Layers, MessageCircle, LibraryIcon, Sparkles, HelpCircle, FileQuestion, ImageUp, List
};
