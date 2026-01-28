import { useTypewriter } from '../../../shared/lib/useTypewriter'
import { Markdown } from '../../../shared/ui/Markdown'

export function MessageBubble({ role, content }) {
	const isUser = role === 'user'

	const animatedText = useTypewriter(
		isUser ? '' : content,
		15 // скорость (меньше = быстрее)
	)

	return (
		<div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
			<div
				className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
					isUser
						? 'bg-blue-600 text-white rounded-br-none'
						: 'bg-gray-200 text-gray-900 rounded-bl-none prose prose-sm'
				}`}
			>
				{isUser ? content : <Markdown>{animatedText}</Markdown>}
			</div>
		</div>
	)
}
