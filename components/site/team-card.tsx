import { Pending } from "@/components/site/pending";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import type { ReactNode } from "react";

export type TeamMember = {
  name?: string;
  role?: ReactNode;
  area?: ReactNode;
  supports?: ReactNode;
  bio?: ReactNode;
  imageSrc?: string;
};

function initials(name?: string) {
  if (!name) return null;
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Team card (spec §5). Structure: name, role, area of responsibility, products
 * or domains supported, optional short bio. Team details are not yet confirmed
 * (spec §14), so unset fields render as "To be confirmed" placeholders.
 */
export function TeamCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-4">
          <Avatar size="xl">
            {member.imageSrc ? (
              <AvatarImage src={member.imageSrc} alt="" />
            ) : null}
            <AvatarFallback>
              {initials(member.name) ?? <User className="h-6 w-6" aria-hidden />}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <Text weight="semibold" as="span">
              {member.name ?? <Pending>Name to be confirmed</Pending>}
            </Text>
            <Text size="sm" variant="muted" as="span">
              {member.role ?? <Pending>Role to be confirmed</Pending>}
            </Text>
          </div>
        </div>
        <dl className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <dt>
              <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
                Area of responsibility
              </Text>
            </dt>
            <dd>
              <Text size="sm" variant="muted" as="span">
                {member.area ?? <Pending />}
              </Text>
            </dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt>
              <Text size="xs" variant="subtle" weight="medium" as="span" className="uppercase tracking-wide">
                Supports
              </Text>
            </dt>
            <dd>
              <Text size="sm" variant="muted" as="span">
                {member.supports ?? <Pending />}
              </Text>
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
