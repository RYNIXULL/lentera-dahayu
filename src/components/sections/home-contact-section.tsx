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
  const sizeClass = large ? "p-5 sm:p-6 gap-4" : "p-4 sm:p-5 gap-3.5";
  const iconBox = large ? "w-13 h-13" : "w-12 h-12";

  const content = (
    <>
      <span
        className={`${iconBox} shrink-0 rounded-2xl bg-white border-2 border-white text-[#0284C7] flex items-center justify-center shadow-[0_6px_14px_-2px_rgba(14,165,233,0.16),inset_2px_2px_4px_#FFFFFF,inset_-2px_-2px_4px_rgba(14,165,233,0.06)]`}
      >
        <ChannelIcon id={channel.id} className="w-5 h-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm sm:text-base font-bold text-[#1E293B]">
          {channel.label}
        </span>
        {!channel.href && (
          <span className="block text-xs font-mono text-[#64748B]/80">
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
        className={`clay-card rounded-[26px] flex items-center ${sizeClass} focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-all hover:-translate-y-1`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      aria-disabled="true"
      className={`clay-inset rounded-[26px] flex items-center ${sizeClass} opacity-75`}
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
      className="py-20 md:py-28 border-t border-[#E2E8F0] relative scroll-mt-20"
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
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#1E293B] font-bold mb-4">
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
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#1E293B] font-bold mb-4">
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

          <p className="text-xs text-[#64748B] text-center">{contact.note}</p>
        </div>
      </div>
    </section>
  );
}
