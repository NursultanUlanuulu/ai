export function ChatInput({ text, setText, onSend, onVoice, loading }) {
	return (
		<div className='p-4 bg-white border-t flex gap-2'>
			<textarea
				rows='1'
				className='flex-1 resize-none border rounded-xl px-3 py-2'
				placeholder='Напишите сообщение...'
				value={text}
				onChange={e => setText(e.target.value)}
				onKeyDown={e => {
					if (e.key === 'Enter' && !e.shiftKey) {
						e.preventDefault()
						onSend()
						setText('') 
					}
				}}
			/>

			<button onClick={onVoice} className='px-3 rounded-xl bg-gray-200'>
				🎤
			</button>

			<button
				onClick={onSend}
				disabled={loading}
				className='px-4 rounded-xl bg-blue-600 text-white'
			>
				➤
			</button>
		</div>
	)
}
