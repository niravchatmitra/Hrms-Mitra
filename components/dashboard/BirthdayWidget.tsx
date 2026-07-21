import { Cake, PartyPopper } from 'lucide-react'

const events = [
  { type: 'birthday', name: 'Meera Pillai', detail: 'Today 🎂', avatar: 'MP', color: 'bg-pink-500' },
  { type: 'anniversary', name: 'Rohit Nair', detail: '3 Years · Tomorrow', avatar: 'RN', color: 'bg-violet-500' },
  { type: 'birthday', name: 'Sanjay Gupta', detail: 'Jul 23', avatar: 'SG', color: 'bg-blue-500' },
  { type: 'anniversary', name: 'Fatima Khan', detail: '5 Years · Jul 24', avatar: 'FK', color: 'bg-amber-500' },
  { type: 'birthday', name: 'Vijay Krishnan', detail: 'Jul 26', avatar: 'VK', color: 'bg-teal-500' },
]

export default function BirthdayWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cake className="w-4 h-4 text-pink-500" />
          <h3 className="text-sm font-semibold text-gray-800">Birthdays & Anniversaries</h3>
        </div>
        <span className="text-xs text-gray-400">This Week</span>
      </div>

      <div className="divide-y divide-gray-50">
        {events.map((event, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
            <div className="relative">
              <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                {event.avatar}
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 text-base">
                {event.type === 'birthday' ? '🎂' : '🎉'}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{event.name}</p>
              <p className="text-[10px] text-gray-500">{event.detail}</p>
            </div>
            <button className="text-[10px] px-2.5 py-1 rounded-full border border-[#075E54]/30 text-[#075E54] hover:bg-[#075E54] hover:text-white transition-all duration-200 font-medium">
              Wish 🎊
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
