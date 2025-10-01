import { Music } from 'lucide-react';
import {
  PianoIcon,
  GuitarIcon,
  DrumsIcon,
  ViolinIcon,
  FluteIcon,
  VocalIcon,
  KeyboardIcon,
} from '@/components/icons';

type InstrumentIconProps = {
  instrument: string;
  className?: string;
};

export function InstrumentIcon({ instrument, className }: InstrumentIconProps) {
  const props = { className };
  switch (instrument.toLowerCase()) {
    case 'piano':
      return <PianoIcon {...props} />;
    case 'guitar':
      return <GuitarIcon {...props} />;
    case 'drums':
      return <DrumsIcon {...props} />;
    case 'violin':
      return <ViolinIcon {...props} />;
    case 'flute':
      return <FluteIcon {...props} />;
    case 'vocal':
      return <VocalIcon {...props} />;
    case 'keyboard':
        return <KeyboardIcon {...props} />;
    default:
      return <Music {...props} />;
  }
}
