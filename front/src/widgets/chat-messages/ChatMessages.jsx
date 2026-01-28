import { MessageBubble } from '../../entities/message/ui/MessageBubble'

export function ChatMessages({ messages, loading, endRef }) {
	return (
		<div className='flex-1 overflow-y-auto p-4 space-y-3'>
			{messages.map((msg, i) => (
				<MessageBubble key={i} {...msg} />
			))}

			{loading && (
				<div className='bg-gray-200 px-4 py-2 rounded-2xl text-sm animate-pulse'>
					ИИ печатает...
				</div>
			)}

			<div ref={endRef} />
		</div>
	)
}
