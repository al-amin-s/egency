import { useEffect, useState, type FormEvent } from "react";

type NavLink = {
  label: string;
  href: string;
};

type ServiceKey =
  | "marketing"
  | "editing"
  | "photography"
  | "videography"
  | "consulting"
  | "social"
  | "website";

type Service = {
  key: ServiceKey;
  title: string;
  description: string;
  benefits: string[];
  result: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  accent: string;
};

type CaseStudy = {
  brand: string;
  owner: string;
  ownerImage: string;
  services: string[];
  story: string;
  result: string;
  revenue: string;
};

type Testimonial = {
  name: string;
  brand: string;
  image: string;
  quote: string;
  services: string;
  revenue: string;
};

type PhotoItem = {
  title: string;
  url?: string;
  placeholder?: string;
};

const WHATSAPP_NUMBER = "15551234567";
const CONTACT_EMAIL = "hello@topfive.agency";

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { value: "7", label: "core services under one roof" },
  { value: "3", label: "featured client success stories" },
  { value: "1", label: "team to handle the whole picture" },
];

const services: Service[] = [
  {
    key: "marketing",
    title: "Digital Marketing",
    description:
      "We help businesses get in front of the right people with clearer offers, better campaigns, and smarter follow-up.",
    benefits: [
      "Campaign planning that matches your business goals",
      "Better visibility across paid and organic channels",
      "Clearer direction on what to promote and why",
    ],
    result:
      "Example result: stronger reach, more relevant enquiries, and less guesswork around growth.",
  },
  {
    key: "editing",
    title: "Video Editing",
    description:
      "Raw footage becomes polished, watchable content that feels on-brand and ready for reels, ads, shorts, and campaigns.",
    benefits: [
      "Clean cuts, pacing, captions, and motion graphics",
      "Edits tailored for social platforms and ad use",
      "A more professional look without slowing your workflow",
    ],
    result:
      "Example result: sharper brand presentation and videos people actually stay to watch.",
  },
  {
    key: "photography",
    title: "Photography",
    description:
      "Strong photos help people trust a brand faster. We create images that make products, people, and spaces feel worth paying attention to.",
    benefits: [
      "Brand, lifestyle, product, and portrait photography",
      "Visual assets for social media, websites, and campaigns",
      "A more premium and consistent brand presence",
    ],
    result:
      "Example result: cleaner brand presentation across every customer touchpoint.",
  },
  {
    key: "videography",
    title: "Videography",
    description:
      "From short promotional videos to cinematic brand content, we capture footage that helps your business feel more real, more trusted, and more memorable.",
    benefits: [
      "On-site shoots for brands, products, and stories",
      "Video assets for launch content, ads, and reels",
      "A stronger visual identity on fast-moving platforms",
    ],
    result:
      "Example result: more engaging brand storytelling and stronger audience response.",
  },
  {
    key: "consulting",
    title: "Business Consulting",
    description:
      "Sometimes the biggest problem is not effort — it is direction. We help businesses make clearer decisions and grow with more confidence.",
    benefits: [
      "Offer clarity and positioning support",
      "Practical growth advice based on what fits the business",
      "Better structure around sales, branding, and priorities",
    ],
    result:
      "Example result: better focus, better messaging, and fewer wasted moves.",
  },
  {
    key: "social",
    title: "Social Media Management",
    description:
      "We keep your brand active, consistent, and presentable online so your audience sees a business that looks alive and well managed.",
    benefits: [
      "Content planning and posting consistency",
      "Feed direction that feels professional and intentional",
      "Less pressure on you to handle daily social execution",
    ],
    result:
      "Example result: a stronger profile presence and a more reliable content rhythm.",
  },
  {
    key: "website",
    title: "Website Building",
    description:
      "A good website should do more than just exist. We build pages that look professional, feel easy to use, and help turn visitors into enquiries.",
    benefits: [
      "Modern, mobile-friendly layouts",
      "Clear messaging and stronger first impressions",
      "Conversion-focused sections and contact flow",
    ],
    result:
      "Example result: a site that feels trustworthy and gives people a clear next step.",
  },
];

const team: TeamMember[] = [
  {
    name: "Al Amin",
    role: "Digital Marketer",
    bio: "Al Amin focuses on visibility, campaigns, and growth direction so brands can reach the right people more consistently.",
    image:
      "https://drive.google.com/file/d/1I-2eqrpym3z_CybmW4QzStJsLcZDn-MT/view?usp=drive_link",
    accent: "from-sky-500/30 to-cyan-400/10",
  },
  {
    name: "Md Ahsan Khan",
    role: "Video Editor",
    bio: "Ahsan turns raw footage into polished edits that feel sharp, modern, and ready for social platforms or client-facing campaigns.",
    image:
      "https://drive.google.com/file/d/1s-2in-y9G3la8KJlYyuhkeVLHUW2Tvcp/view?usp=drive_link",
    accent: "from-fuchsia-500/30 to-violet-400/10",
  },
  {
    name: "Jubaer Ahammed",
    role: "Photographer & Videographer",
    bio: "Jubaer leads both photography and videography, helping the brand stay visually consistent from the camera to the final delivery.",
    image:
      "https://drive.google.com/file/d/1GX_aAgiXhiu6QwKQL_cN4xw3mboF4y3_/view?usp=drive_link",
    accent: "from-amber-400/25 to-orange-400/10",
  },
  {
    name: "Usama Ben Mahmud",
    role: "Business Consultant",
    bio: "Usama helps business owners think more clearly about direction, positioning, and the practical decisions that support real growth.",
    image:
      "https://drive.google.com/file/d/16YRM9D7K2L2eF3FWJ_C38QcbB_VTah8q/view?usp=drive_link",
    accent: "from-emerald-400/25 to-teal-400/10",
  },
];

const photographyGallery: PhotoItem[] = [
  {
    title: "Photography Work 01",
    url: "https://drive.google.com/file/d/19JfRlV2ZkQUc69LOt7TlI9I7XzivZmGZ/view?usp=drivesdk",
  },
  {
    title: "Photography Work 02",
    url: "https://drive.google.com/file/d/1TY-Vgs36Tkspqz5IZmRnJQMUon_WlHxd/view?usp=drivesdk",
  },
  {
    title: "Photography Work 03",
    url: "https://drive.google.com/file/d/1cnZ96PkLnqDzwj4iyfojAYOJPYx7fqlP/view?usp=drivesdk",
  },
  {
    title: "Photography Work 04",
    url: "https://drive.google.com/file/d/1F8UN680tnnMW0zlJRpC6lQUPHemsg3Rj/view?usp=drivesdk",
  },
  {
    title: "Photography Work 05",
    url: "https://drive.google.com/file/d/14_oKcdjV9rYanLcRldt6ae4DI8Nvd9y7/view?usp=drivesdk",
  },
  {
    title: "Photography Work 06",
    url: "https://drive.google.com/file/d/1JRivVW5o7TnkT-85t-Orzmm48aDz3NDh/view?usp=drivesdk",
  },
  {
    title: "Photography Work 07",
    url: "https://drive.google.com/file/d/1ZRCXIfVrc7t1de07ddzkp-UmjiUmv-ZF/view?usp=drivesdk",
  },
  {
    title: "Photography Work 08",
    placeholder: "Reserved for your next photo link",
  },
  {
    title: "Photography Work 09",
    placeholder: "Reserved for your next photo link",
  },
  {
    title: "Photography Work 10",
    placeholder: "Reserved for your next photo link",
  },
];

const videoEditingLinks = [
  {
    label: "Facebook Reel 01",
    href: "https://www.facebook.com/reel/908779488153802",
    platform: "Facebook Reel",
  },
  {
    label: "Facebook Reel 02",
    href: "https://www.facebook.com/reel/1005950445028905",
    platform: "Facebook Reel",
  },
  {
    label: "YouTube Short",
    href: "https://youtube.com/shorts/uFUlap0aoEA",
    platform: "YouTube Shorts",
  },
];

const caseStudies: CaseStudy[] = [
  {
    brand: "Organic Desi Food",
    owner: "Md Anisur Rahaman",
    ownerImage:
      "https://drive.google.com/file/d/1R4micrO2Q45GGw9G5Mu91AOuz1HX9Jxe/view?usp=drive_link",
    services: ["Videography", "Video Editing"],
    story:
      "Organic Desi Food needed content that made the brand feel more appetising, more professional, and easier to trust online. We focused on strong visuals and cleaner edits so the product could sell itself better on screen.",
    result: "Content that looked more polished and helped the brand present itself with much more confidence.",
    revenue: "400k per month revenue",
  },
  {
    brand: "Stylish Young Man",
    owner: "Md PM Khan",
    ownerImage:
      "https://drive.google.com/file/d/1h-syl1F4uhpaY1rHJmO9acN0gfqYHW2k/view?usp=drive_link",
    services: [
      "Digital Marketing",
      "Video Editing",
      "Photography",
      "Videography",
      "Business Consulting",
      "Social Media Management",
      "Website Building",
    ],
    story:
      "This brand came in needing complete support. We helped shape the visual identity, content flow, digital presence, and growth direction so everything started working together instead of feeling scattered.",
    result: "A more complete brand presence that helped the business build traction faster.",
    revenue: "300k revenue in 2 months",
  },
  {
    brand: "CSCA Mentors",
    owner: "Kayes Uddin",
    ownerImage:
      "https://drive.google.com/file/d/1GNqYXi0t_ukjQtuqLh71QA0T3gaLQ50T/view?usp=drive_link",
    services: [
      "Digital Marketing",
      "Video Editing",
      "Photography",
      "Videography",
      "Business Consulting",
      "Social Media Management",
      "Website Building",
    ],
    story:
      "Even in a shorter engagement, we helped CSCA Mentors improve how the brand looked, communicated, and showed up online. That quick consistency made a noticeable difference.",
    result: "A stronger online presentation and better audience response in a short period of time.",
    revenue: "200k revenue in 2 months",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Md Anisur Rahaman",
    brand: "Organic Desi Food",
    image:
      "https://drive.google.com/file/d/1R4micrO2Q45GGw9G5Mu91AOuz1HX9Jxe/view?usp=drive_link",
    quote:
      "The biggest difference for us was how much more professional our food content started to feel. The videos looked clean, attractive, and far more ready to sell.",
    services: "Videography + Video Editing",
    revenue: "400k per month revenue",
  },
  {
    name: "Md PM Khan",
    brand: "Stylish Young Man",
    image:
      "https://drive.google.com/file/d/1h-syl1F4uhpaY1rHJmO9acN0gfqYHW2k/view?usp=drive_link",
    quote:
      "Having one team handle everything made the whole process easier. We did not have to explain the brand again and again to different people.",
    services: "Full-service support",
    revenue: "300k revenue in 2 months",
  },
  {
    name: "Kayes Uddin",
    brand: "CSCA Mentors",
    image:
      "https://drive.google.com/file/d/1GNqYXi0t_ukjQtuqLh71QA0T3gaLQ50T/view?usp=drive_link",
    quote:
      "Even in a short time, Top Five brought more clarity and consistency to how we showed up. That made a real difference in the response we were getting.",
    services: "Full-service support",
    revenue: "200k revenue in 2 months",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: "mail" },
];

function createWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getDriveFileId(url: string) {
  const match = url.match(/\/d\/([^/]+)/) ?? url.match(/[?&]id=([^&]+)/);
  return match?.[1] ?? "";
}

function toDriveImage(url: string, size = 1200) {
  const id = getDriveFileId(url);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w${size}` : url;
}

function toYouTubeEmbed(url: string) {
  const match = url.match(/(?:shorts\/|watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function renderServiceIcon(key: ServiceKey) {
  switch (key) {
    case "marketing":
      return <TargetIcon className="h-6 w-6" />;
    case "editing":
      return <FilmIcon className="h-6 w-6" />;
    case "photography":
      return <CameraIcon className="h-6 w-6" />;
    case "videography":
      return <VideoIcon className="h-6 w-6" />;
    case "consulting":
      return <BriefcaseIcon className="h-6 w-6" />;
    case "social":
      return <ShareIcon className="h-6 w-6" />;
    case "website":
      return <LayoutIcon className="h-6 w-6" />;
    default:
      return <SparkIcon className="h-6 w-6" />;
  }
}

function renderSocialIcon(icon: string) {
  switch (icon) {
    case "facebook":
      return <FacebookIcon className="h-5 w-5" />;
    case "instagram":
      return <InstagramIcon className="h-5 w-5" />;
    case "youtube":
      return <YoutubeIcon className="h-5 w-5" />;
    default:
      return <MailIcon className="h-5 w-5" />;
  }
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/90">
        <SparkIcon className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function SafeImage({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex h-full min-h-[12rem] w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center text-sm text-slate-300 ${className ?? ""}`}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

function ServiceProofModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass-panel max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/80">Service proof</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{service.title}</h3>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            onClick={onClose}
            aria-label="Close proof modal"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[calc(90vh-88px)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
          <ServiceProofContent service={service} />
        </div>
      </div>
    </div>
  );
}

function ServiceProofContent({ service }: { service: Service }) {
  if (service.key === "marketing") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Sample performance snapshot</p>
          <div className="mt-6 flex h-56 items-end gap-3 sm:gap-4">
            {[34, 48, 62, 73, 88, 96].map((value, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className="w-full rounded-t-2xl bg-gradient-to-t from-sky-500 to-cyan-300"
                  style={{ height: `${value}%` }}
                />
                <span className="text-xs text-slate-400">W{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Offer clarity", value: "Stronger message" },
              { label: "Reach quality", value: "More relevant audience" },
              { label: "Lead direction", value: "Cleaner follow-up path" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">What this proof is showing</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Digital marketing proof is not always one single image. What matters most is the pattern: clearer offers, smarter targeting, and better-performing content over time.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">How Top Five approaches it</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                "We start by understanding what the business actually needs to sell.",
                "Then we align messaging, visuals, and campaigns so they feel connected.",
                "After launch, we keep improving the pieces that bring the best response.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (service.key === "editing") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 sm:p-5">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Featured video sample</p>
          <div className="mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <iframe
              className="h-full w-full"
              src={toYouTubeEmbed("https://youtube.com/shorts/uFUlap0aoEA")}
              title="Top Five video editing proof"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">More editing samples</h4>
            <div className="mt-4 grid gap-3">
              {videoEditingLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-200 transition hover:border-sky-400/30 hover:bg-white/[0.05]"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                      {item.platform}
                    </span>
                    <span className="mt-1 block font-medium text-white">{item.label}</span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 text-sky-200" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">Why editing matters</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A good edit keeps attention, improves the pace, and makes the brand feel far more intentional. Small improvements in editing often make a big difference in how professional the final content feels.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (service.key === "photography") {
    return (
      <div>
        <div className="mb-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h4 className="text-lg font-semibold text-white">Photography highlight gallery</h4>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            You asked for 10 photography slots here. I have added your 7 supplied images and kept 3 polished placeholders ready for the next photo links you share.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {photographyGallery.map((item, index) => (
            <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
              <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                {item.url ? (
                  <SafeImage
                    src={toDriveImage(item.url, 1400)}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    fallback={item.title}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950 p-6 text-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/80">
                        Slot {index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{item.placeholder}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {item.url ? "Photography proof" : "Ready for update"}
                  </p>
                </div>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-sky-400/30 hover:text-white"
                    aria-label={`Open ${item.title}`}
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (service.key === "videography") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 sm:p-5">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Videography sample</p>
          <div className="mt-4 aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <iframe
              className="h-full w-full"
              src={toYouTubeEmbed("https://youtube.com/shorts/uFUlap0aoEA")}
              title="Top Five videography proof"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">What strong videography does</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                "It gives the audience a better feel for the brand in seconds.",
                "It makes products, spaces, and people feel more trustworthy.",
                "It gives marketing and editing better raw material to work with.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://youtube.com/shorts/uFUlap0aoEA"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-slate-200 transition hover:border-sky-400/30 hover:bg-white/[0.05]"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">Open sample</span>
              <span className="mt-1 block text-base font-semibold text-white">Watch on YouTube Shorts</span>
            </span>
            <ArrowUpRightIcon className="h-5 w-5 text-sky-200" />
          </a>
        </div>
      </div>
    );
  }

  if (service.key === "consulting") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60">
          <SafeImage
            src="/images/business-consulting-proof.png"
            alt="Business consulting proof"
            className="h-full w-full object-cover"
            fallback="Business consulting proof image"
          />
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">What consulting support looks like</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Business owners often know they need to grow, but not which move should come first. Consulting helps make that next step clearer and more practical.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Sharper positioning",
              "Better decision-making",
              "A clearer growth plan",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm font-medium text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (service.key === "social") {
    return (
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-sm rounded-[2.25rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-sky-500/10">
          <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">@topfive.agency</p>
                <p className="text-xs text-slate-400">Consistent visual presence</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-300">
                feed preview
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                "from-sky-500/40 to-cyan-400/20",
                "from-fuchsia-500/40 to-violet-400/20",
                "from-emerald-500/40 to-teal-400/20",
                "from-amber-400/40 to-orange-400/20",
                "from-slate-600/50 to-slate-800/30",
                "from-sky-400/35 to-indigo-400/20",
                "from-violet-500/35 to-pink-400/20",
                "from-cyan-400/35 to-blue-500/20",
                "from-emerald-400/35 to-lime-400/20",
              ].map((gradient, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-2xl border border-white/10 bg-gradient-to-br ${gradient}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-lg font-semibold text-white">Why social management matters</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Most businesses do not struggle because they lack potential. They struggle because they post inconsistently, the brand feels uneven, or no one has time to manage it properly. Social media management fixes that rhythm.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Typical structure</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Content planning",
                "Posting consistency",
                "Stronger profile presentation",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm font-medium text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-4 sm:p-5">
        <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs uppercase tracking-[0.24em] text-slate-400">Website preview</span>
          </div>
          <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-white">Top Five</p>
                <p className="mt-1 text-sm text-slate-400">Everything Your Business Needs in One Team</p>
              </div>
              <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-200">
                CTA ready
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3">
                <div className="h-3 w-32 rounded-full bg-white/10" />
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-4/5 rounded-full bg-white/10" />
                <div className="mt-4 flex gap-3">
                  <div className="h-10 w-28 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
                  <div className="h-10 w-28 rounded-full border border-white/10 bg-white/5" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-sky-500/25 to-cyan-400/10 p-4" />
                <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/25 to-violet-400/10 p-4" />
                <div className="rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-400/10 p-4" />
                <div className="rounded-2xl bg-gradient-to-br from-amber-400/25 to-orange-400/10 p-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <h4 className="text-lg font-semibold text-white">What this proves</h4>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            A well-built website gives your business a stronger first impression, keeps the message clear, and helps visitors move naturally toward contacting you.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {[
            "Mobile-friendly",
            "Clear sections",
            "Built to convert",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm font-medium text-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedService]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Hello Top Five, my name is ${formData.name}. My email is ${formData.email}. I would like help with: ${formData.message}`;
    window.open(createWhatsappLink(message), "_blank", "noopener,noreferrer");
    setFormStatus("Thanks — your message is ready in WhatsApp so you can send it straight away.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/18 blur-3xl" />
        <div className="absolute right-[-6rem] top-[8rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/14 blur-3xl" />
        <div className="absolute bottom-[12rem] left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold shadow-lg shadow-sky-500/10">
              TF
            </span>
            <span>
              <span className="block text-base font-semibold tracking-wide">Top Five</span>
              <span className="block text-xs text-slate-400">Everything Your Business Needs in One Team</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#portfolio"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-white/5 hover:text-white"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:scale-[1.02]"
            >
              Get Started
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400/30 hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="scroll-mt-28 px-6 pb-16 pt-14 sm:pt-18 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
                <SparkIcon className="h-3.5 w-3.5" />
                Full-Service Business Support Agency
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                We Build &amp; Grow <span className="gradient-text">Your Business</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Running a business is already hard enough. Top Five brings together marketing, content creation, visuals, strategy, and support in one team so you do not have to manage five different people just to move your brand forward.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-sky-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/30"
                >
                  Get Started
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-sky-400/30 hover:bg-white/10"
                >
                  View Portfolio
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {services.map((service) => (
                  <span
                    key={service.key}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                  >
                    <span className="text-sky-300">•</span>
                    {service.title}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`glass-panel rounded-3xl p-5 ${index === 1 ? "animate-float-delayed" : "animate-float"}`}
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal>
              <div className="glass-panel rounded-[2rem] p-6 shadow-[0_24px_80px_rgba(8,15,32,0.45)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Portfolio highlights</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Recent client results</h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                    Above the fold
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {caseStudies.map((study) => (
                    <article
                      key={study.brand}
                      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                          <SafeImage
                            src={toDriveImage(study.ownerImage, 300)}
                            alt={study.owner}
                            className="h-full w-full object-cover"
                            fallback={study.owner}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <h3 className="text-base font-semibold text-white">{study.brand}</h3>
                              <p className="mt-1 text-sm text-slate-400">{study.owner}</p>
                            </div>
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                              {study.revenue}
                            </span>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-300">{study.result}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-sky-400/20 bg-sky-400/10 p-5">
                  <p className="text-sm font-medium text-sky-100">
                    One team means strategy, visuals, and execution stay aligned from the first idea to the final result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About Top Five"
              title="A support team built for businesses that want real progress"
              description="Top Five exists for business owners who need things done properly, consistently, and with less back-and-forth. We combine strategy, creative work, and execution so your brand can grow without feeling scattered."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="glass-panel rounded-[2rem] p-8" data-reveal>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Our story</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Why Top Five was created</h3>
                <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
                  <p>
                    A lot of businesses are good at what they do, but they still struggle to grow because their branding, content, marketing, and strategy are being handled separately — or not being handled at all.
                  </p>
                  <p>
                    Top Five was built to solve that. Instead of sending clients to one person for visuals, another for editing, and someone else for growth advice, we bring the important pieces together so the business can move with more clarity.
                  </p>
                  <p>
                    The goal is simple: help brands look stronger, communicate better, and grow with a team that understands the full picture.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="glass-panel rounded-[2rem] p-8" data-reveal>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Mission</p>
                  <p className="mt-3 text-lg leading-8 text-slate-200">
                    To give new and growing businesses one reliable team for branding, marketing, visuals, content, and consulting — so growth feels more organised and more achievable.
                  </p>
                </div>
                <div className="glass-panel rounded-[2rem] p-8" data-reveal>
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Vision</p>
                  <p className="mt-3 text-lg leading-8 text-slate-200">
                    To become the go-to business support agency for founders who want premium presentation, practical guidance, and a team that can actually execute.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {team.map((member) => (
                <article key={member.name} className="glass-panel rounded-[2rem] p-5" data-reveal>
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                    <div className={`absolute hidden bg-gradient-to-br ${member.accent}`} />
                    <SafeImage
                      src={toDriveImage(member.image, 900)}
                      alt={member.name}
                      className="aspect-[4/5] w-full object-cover"
                      fallback={member.name}
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-xl font-semibold text-white">{member.name}</p>
                    <p className="mt-1 text-sm font-medium text-sky-200">{member.role}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{member.bio}</p>
                  </div>
                </article>
              ))}

              <div className="glass-panel rounded-[2rem] p-6" data-reveal>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/10 text-sky-200">
                  <UsersIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">How the team works</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Top Five is built around five essential support areas. Jubaer leads both photography and videography, which helps keep the visual direction consistent across every project.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Marketing",
                    "Editing",
                    "Photography",
                    "Videography",
                    "Consulting",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Services"
              title="Everything your business needs to look better and grow better"
              description="Each service is designed to solve a real business problem — whether that is visibility, presentation, consistency, or direction. Every card below includes a proof button so visitors can quickly see relevant examples."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.key}
                  className="glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20"
                  data-reveal
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/10 text-sky-200">
                    {renderServiceIcon(service.key)}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>

                  <ul className="mt-5 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm text-slate-200">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Example result</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{service.result}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300/40 hover:bg-sky-400/15"
                  >
                    Show proof
                    <PlayIcon className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Portfolio & case studies"
              title="A few examples of how Top Five supports real brands"
              description="These highlights show the kind of support we provide — from cleaner brand presentation to stronger content and more complete business support."
            />

            <div className="mt-14 grid gap-6 xl:grid-cols-3">
              {caseStudies.map((study) => (
                <article key={study.brand} className="glass-panel rounded-[2rem] p-6" data-reveal>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                      <SafeImage
                        src={toDriveImage(study.ownerImage, 500)}
                        alt={study.owner}
                        className="h-full w-full object-cover"
                        fallback={study.owner}
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-white">{study.brand}</p>
                      <p className="mt-1 text-sm text-slate-400">Brand holder: {study.owner}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.services.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-300">{study.story}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Outcome</p>
                      <p className="mt-2 text-sm leading-6 text-white">{study.result}</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">Revenue highlight</p>
                      <p className="mt-2 text-sm leading-6 text-emerald-50">{study.revenue}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="What clients appreciated about working with Top Five"
              description="The best feedback usually sounds simple: the work felt easier, the brand looked better, and the business started moving with more confidence."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="glass-panel rounded-[2rem] p-6" data-reveal>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                      <SafeImage
                        src={toDriveImage(testimonial.image, 500)}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        fallback={testimonial.name}
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-slate-400">{testimonial.brand}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
                      {testimonial.services}
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                      {testimonial.revenue}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: <ChartIcon className="h-6 w-6" />,
                  title: "Practical business thinking",
                  copy: "The creative work is stronger because it is connected to what the business is actually trying to achieve.",
                },
                {
                  icon: <ShieldIcon className="h-6 w-6" />,
                  title: "A more trustworthy brand image",
                  copy: "Good visuals, good structure, and good messaging help people take a business more seriously, faster.",
                },
                {
                  icon: <UsersIcon className="h-6 w-6" />,
                  title: "One coordinated team",
                  copy: "Clients do not have to manage multiple separate freelancers. That alone saves time, energy, and confusion.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-panel rounded-[2rem] p-6" data-reveal>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/10 text-sky-200">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="glass-panel rounded-[2rem] p-8" data-reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/90">
                  <MessageIcon className="h-3.5 w-3.5" />
                  Contact Top Five
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s talk about what your business needs right now
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  Whether you need better content, stronger branding, more visibility, or clearer strategy, we can help you figure out the next step and start moving in the right direction.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={createWhatsappLink("Hello Top Five, I would like to discuss my business.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-3xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-left transition hover:border-emerald-300/30 hover:bg-emerald-400/15"
                  >
                    <span>
                      <span className="block text-sm uppercase tracking-[0.22em] text-emerald-200/90">WhatsApp</span>
                      <span className="mt-1 block text-base font-semibold text-white">Send us a message</span>
                    </span>
                    <ArrowUpRightIcon className="h-5 w-5 text-emerald-200" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left transition hover:border-sky-400/20 hover:bg-white/[0.06]"
                  >
                    <span>
                      <span className="block text-sm uppercase tracking-[0.22em] text-slate-400">Email</span>
                      <span className="mt-1 block text-base font-semibold text-white">{CONTACT_EMAIL}</span>
                    </span>
                    <MailIcon className="h-5 w-5 text-sky-200" />
                  </a>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Working style</p>
                  <p className="mt-2 text-base leading-7 text-slate-300">
                    Remote-first agency • Flexible with new and existing businesses • Usually responds within 24 hours
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/20 hover:bg-white/[0.06]"
                    >
                      {renderSocialIcon(link.icon)}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-8" data-reveal>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Lead capture form</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Start your next conversation with us</h3>
                  </div>
                  <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 sm:inline-flex">
                    Simple & fast
                  </span>
                </div>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, name: event.target.value }))
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-slate-950"
                        placeholder="Your name"
                        required
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, email: event.target.value }))
                        }
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-slate-950"
                        placeholder="you@business.com"
                        required
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
                    <textarea
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, message: event.target.value }))
                      }
                      className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-slate-950"
                      placeholder="Tell us about your business, your goals, and the kind of support you are looking for."
                      required
                    />
                  </label>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
                    >
                      Send Enquiry
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </button>
                    <p className="text-sm leading-6 text-slate-400">
                      Submitting opens WhatsApp with your message for a faster reply.
                    </p>
                  </div>

                  {formStatus ? (
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                      {formStatus}
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Top Five</p>
            <p className="mt-2 text-sm text-slate-400">Everything Your Business Needs in One Team</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                {renderSocialIcon(link.icon)}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {selectedService ? (
        <ServiceProofModal service={selectedService} onClose={() => setSelectedService(null)} />
      ) : null}
    </div>
  );
}

type IconProps = {
  className?: string;
};

function ArrowUpRightIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ChevronRightIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function TargetIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  );
}

function FilmIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14" />
      <path d="M17 5v14" />
      <path d="M3 9h4" />
      <path d="M3 15h4" />
      <path d="M17 9h4" />
      <path d="M17 15h4" />
    </svg>
  );
}

function CameraIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 8h3l2-3h6l2 3h3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function VideoIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3z" />
    </svg>
  );
}

function BriefcaseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function ShareIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 3.9" />
      <path d="m15.4 6.6-6.8 3.8" />
    </svg>
  );
}

function LayoutIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 20V9" />
    </svg>
  );
}

function SparkIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7z" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function PlayIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 6.5v11l9-5.5z" />
    </svg>
  );
}

function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function MessageIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 19V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7h2.4l.36-2.73H13.5V9.54c0-.79.22-1.33 1.35-1.33H16.4V5.76c-.27-.04-1.2-.12-2.28-.12-2.25 0-3.79 1.37-3.79 3.9v1.73H7.8V14h2.53v7z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.1C17.62 4.5 12 4.5 12 4.5s-5.62 0-7.48.59a2.98 2.98 0 0 0-2.1 2.1A31.2 31.2 0 0 0 1.83 12a31.2 31.2 0 0 0 .59 4.81 2.98 2.98 0 0 0 2.1 2.1c1.86.59 7.48.59 7.48.59s5.62 0 7.48-.59a2.98 2.98 0 0 0 2.1-2.1 31.2 31.2 0 0 0 .59-4.81 31.2 31.2 0 0 0-.59-4.81M10.2 14.96V9.04L15.27 12z" />
    </svg>
  );
}

function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m12 3.5 2.6 5.27 5.82.84-4.21 4.1 1 5.79L12 16.74 6.79 19.5l1-5.79-4.21-4.1 5.82-.84z" />
    </svg>
  );
}

function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-4" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6z" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16.5 4.13a3 3 0 0 1 0 5.74" />
    </svg>
  );
}
