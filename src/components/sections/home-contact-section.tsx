import React from "react";
import { Dictionary } from "@/types/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChannelIcon } from "@/components/ui/channel-icons";
import {
  ContactChannel,
  PRIMARY_CHANNELS,
  SOCIAL_CHANNELS,
} from "@/config/contact-channels";

interface HomeContactSectionProps {
  dict: Dictionary;
}

function ChannelItem({
  channel,
  comingSoon,
  large = false,
}: {
  channel: ContactChannel;
  comingSoon: string;
  large?: boolean;
}) {
  const sizeClass = large ? "p-5 gap-4" : "p-4 gap-3";
  const iconBox = large ? "w-11 h-11" : "w-10 h-10";

  const content = (
    <>
      <span
        className={`${iconBox} shrink-0 rounded-xl bg-[#172232] border border-[#2A3545] text-[#8BE5FF] flex items-center justify-center`}
      >
        <ChannelIcon id={channel.id} className="w-5 h-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-[#F3F6FA]">
          {channel.label}
        </span>
        {!channel.href && (
          <span className="block text-xs font-mono text-[#A5B0C0]">
            {comingSoon}
          </span>
        )}
      </span>
    </>
  );

  if (channel.href) {
    const isExternal = !channel.href.startsWith("mailto:");
    return (
      <a
        href={channel.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`glass-card rounded-2xl flex items-center ${sizeClass} focus:outline-none focus:ring-2 focus:ring-[#C1F1FF]`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      aria-disabled="true"
      className={`rounded-2xl flex items-center ${sizeClass} bg-[#111824]/40 border border-[#2A3545] opacity-80`}
    >
      {content}
    </div>
  );
}

export function HomeContactSection({ dict }: HomeContactSectionProps) {
  const { contact } = dict.home;

  return (
    <section
      id="kontak"
      aria-labelledby="home-contact-heading"
      className="py-20 md:py-28 border-t border-[#2A3545]/60 relative scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#F3F6FA] mb-4">
              {contact.primaryTitle}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRIMARY_CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <ChannelItem
                    channel={channel}
                    comingSoon={contact.comingSoon}
                    large
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#F3F6FA] mb-4">
              {contact.socialTitle}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <ChannelItem
                    channel={channel}
                    comingSoon={contact.comingSoon}
                  />
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-[#A5B0C0] text-center">{contact.note}</p>
        </div>
      </div>
    </section>
  );
}
