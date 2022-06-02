const SidebarLink = ({ Icon, text, active }) => {
  return (
    <div
      className={`text-slate-100 flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-extrabold"
      }`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarLink;
