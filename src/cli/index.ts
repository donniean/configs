import commands from './commands';

export default function cli() {
  const argv = commands();

  console.log(argv);
}
