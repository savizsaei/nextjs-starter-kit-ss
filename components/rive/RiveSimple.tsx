'use client'

import { useRive } from '@rive-app/react-canvas';

export default function RiveSimple() {
  const { rive, RiveComponent } = useRive({
    src: './rive/fc_reveal_a.riv',
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
      id="rive"
      style={{width: '400px', height: '400px'}}
    />
  );
}