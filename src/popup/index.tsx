import { Input } from '@/components/ui/input';
import { Link } from 'lucide-react';
import { useState } from 'react';
import '../styles';

function IndexPopup() {
	const [data, setData] = useState('');

	return (
		<div className='min-w-max space-y-4 p-4'>
			<h2>
				Welcome to your{' '}
				<a href='https://www.plasmo.com' target='_blank'>
					Plasmo
				</a>{' '}
				Extension!
			</h2>
			<Input
				className='w-full'
				value={data}
				onChange={(e) => setData(e.target.value)}
				placeholder='Type something...'
			/>
			<a
				href='https://docs.plasmo.com'
				target='_blank'
				className='underline'
			>
				<span className='flex w-full flex-row items-center space-x-2'>
					<Link size={12} />
					<p>Learn more about Plasmo</p>
				</span>
			</a>
			<p>
				{data.length > 0
					? `You typed: ${data}`
					: 'Type something to see it here!'}
			</p>
		</div>
	);
}

export default IndexPopup;
