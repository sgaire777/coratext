import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import workflow1 from "../assets/workflow/feature1.jpg";
import workflow2 from "../assets/workflow/feature2.png";
import workflow3 from "../assets/workflow/feature3.png";
import workflow4 from "../assets/workflow/feature4.png";
import workflow5 from "../assets/workflow/feature5.png";
import workflow6 from "../assets/workflow/feature6.png";

import step1 from "../assets/workflow/step1.png";
import step2 from "../assets/workflow/step2.png";
import step3 from "../assets/workflow/step3.png";

export const navItems = [
  { href: "workflow", label: "Workflow" },
  { href: "why", label: "Why SMS" },
  { href: "pricing", label: "Pricing" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const steps = [
  {
    image: step1,
    text: "Step 1",
    description:
      "Import or build a highly targeted, buyers SMS list using our bot messages & mobile widget.",
  },
  {
    image: step2,
    text: "Step 2",
    description:
      "Follow-up & nurture your subscribers with our intelligent SMS Bots, LIVE Chat and mass messages.",
  },
  {
    image: step3,
    text: "Step 3",
    description:
      "Sit & see the sales rolling in. Rinse and repeat. Have 100% control of your business.",
  },
];

export const features = [
  {
    image: workflow1,
    text: "UPLOAD CSV FILE",
    description:
      "Upload your own CSV file to CoraText with a click of a button. Very easy & simple.",
  },
  {
    image: workflow2,
    text: "MOBILE LEAD CAPTURE",
    description:
      "Create a mobile lead capture widget inside CoraText and put it anywhere on your website.",
  },
  {
    image: workflow3,
    text: "BUILD YOUR LIST",
    description:
      "Every time someone texts you, they are added to your SMS list automatically. No further steps required.",
  },
  {
    image: workflow4,
    text: "INTELLIGENT LOGIC BOTS",
    description:
      "Send them a Automatic message as they sign up or message you. Create your logic bot and build intelligent conversation that sells for you even when you are away.",
  },
  {
    image: workflow5,
    text: "TAKE OVER LIVE CHAT",
    description:
      "You can take over the Bot response by responding to your leads directly from CoraText 'Messaging' dashboard. 2 way SMS.",
  },
  {
    image: workflow6,
    text: "BROADCAST SMS",
    description:
      "You can use this feature to send mass SMS or schedule a mass sms. With a click of a button, reach hundreds or thousands of your customers.",
  },
];

export const pricingOptions = [
  {
    title: "Coratext",
    price: "$97",
    features: [
      "Storage: 10,000 Contacts",
      "Reply To Messages inside Dashboard",
      "Bots Included: Unlimited",
      "Text Campaigns: Unlimited",
      "PREMIUM SUPPORT - Response within 24 hours",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
