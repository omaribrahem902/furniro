interface BadgeProps{
    badgeText: string,
}

const Badge = ({badgeText}:BadgeProps) => {
  return (
    <>
    {badgeText == "New"?  <span className={`absolute top-[20px] right-[20px] w-[48px] h-[48px] flex justify-center items-center rounded-full bg-(--newBadgeColor) text-white text-[16px] font-normal`}>{badgeText}</span> : 
    <span className="absolute top-[20px] right-[20px] w-[48px] h-[48px] flex justify-center items-center rounded-full bg-(--saleBageColor) text-white text-[16px] font-normal">{badgeText}</span>}
    </>
  )
}

export default Badge;