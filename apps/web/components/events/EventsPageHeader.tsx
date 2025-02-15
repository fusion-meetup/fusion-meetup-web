export interface EventsPageHeaderProps {
  children: React.ReactNode;
}

export const EventsPageHeader: React.FC<EventsPageHeaderProps> = ({
  children,
}) => {
  return (
    <div className="px-4 pt-6">
      <div className="relative">
        <div className="-mb-7 h-20 rounded-xl bg-gradient-to-b from-white to-transparent opacity-25" />

        <div className="absolute top-2 left-4 text-xl text-slate-300 md:text-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
