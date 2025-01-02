import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { useState } from 'react';
import '../styles';

const App = () => {
	const [worldHello, setWorldHello] = useState(false);

	return (
		<div className='flex h-[calc(100dvh)] w-full items-center justify-center bg-black text-foreground antialiased'>
			<div className='mx-auto flex w-full max-w-sm flex-col justify-center space-y-4'>
				<div className='flex flex-row items-center justify-between space-x-2'>
					<p className='text-center text-sm font-bold text-red-400'>
						{worldHello
							? 'Good job, try again'
							: 'Hellow the World below'}
					</p>
					{worldHello && (
						<Button
							onClick={() => setWorldHello(false)}
							variant='none'
							size='none'
							className='text-white'
						>
							<RotateCcw className='size-5' />
						</Button>
					)}
				</div>
				<Button
					onClick={() => {
						alert('Hellod the World');
						setWorldHello(true);
					}}
					variant='secondary'
					size='lg'
					disabled={worldHello}
				>
					<p className='text-lg font-semibold'>
						{worldHello ? 'Helloed the world!' : 'Hello World'}
					</p>
				</Button>
			</div>
		</div>
	);
};

export default App;
