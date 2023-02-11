import * as S from './style';

export interface SysgamingProps {
  width?: number;
  height?: number;
}

const Sysgaming = ({ width = 140, height = 140 }: SysgamingProps) => {
  return (
    <S.Svg
      width={width}
      height={height}
      viewBox='0 0 70 70'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g fillRule='nonzero' fill='none'>
        <path
          className='b b1'
          d='M22.495 29.99A7.496 7.496 0 1 1 22.496 15a7.496 7.496 0 0 1 0 14.99'
        />
        <path
          className='b b2'
          d='M34.809 29.99a7.496 7.496 0 1 1 0-14.99 7.496 7.496 0 0 1 0 14.99'
        />
        <path
          className='b b3'
          d='M47.122 29.99A7.496 7.496 0 1 1 47.123 15a7.496 7.496 0 0 1 0 14.99'
        />
        <path
          className='b b4'
          d='M22.494 42.229a7.496 7.496 0 1 1 0-14.992 7.496 7.496 0 0 1 0 14.992'
        />
        <path
          className='b b5'
          d='M34.809 42.228a7.496 7.496 0 1 1 0-14.992 7.496 7.496 0 0 1 0 14.992'
        />
        <path
          className='b b6'
          d='M47.122 42.228a7.496 7.496 0 1 1 .001-14.992 7.496 7.496 0 0 1 0 14.992'
        />
        <path
          className='b b7'
          d='M22.494 54.465a7.495 7.495 0 1 1 0-14.992 7.495 7.495 0 0 1 0 14.992'
        />
        <path
          className='b b8'
          d='M34.809 54.465a7.496 7.496 0 1 1 0-14.991 7.496 7.496 0 0 1 0 14.99'
        />
        <path
          className='b b9'
          d='M47.122 54.465a7.496 7.496 0 1 1 .001-14.991 7.496 7.496 0 0 1 0 14.99'
        />

        <path
          d='M24.046 23.562c0-.933-.063-1.137-1.32-1.438-.806-.197-.82-.21-.82-.744 0-.407.105-.533.702-.533.406 0 .862.056 1.248.14l.098-.743a6.375 6.375 0 0 0-1.36-.155c-1.186 0-1.572.421-1.572 1.27 0 .989.154 1.207 1.284 1.459.842.182.856.225.856.744 0 .449-.105.582-.744.582-.463 0-.884-.084-1.319-.217l-.154.694c.309.147.926.28 1.459.28 1.382 0 1.642-.455 1.642-1.34v.001zm10.763-1.046l-1.01-2.357h-.94l1.508 3.319v1.354h.884v-1.354l1.508-3.319h-.94l-1.01 2.357zm13.864 1.046c0-.933-.063-1.137-1.319-1.438-.807-.197-.82-.21-.82-.744 0-.407.104-.533.7-.533.408 0 .864.056 1.25.14l.098-.743a6.375 6.375 0 0 0-1.361-.155c-1.186 0-1.572.421-1.572 1.27 0 .989.155 1.207 1.284 1.459.842.182.856.225.856.744 0 .449-.105.582-.744.582-.463 0-.884-.084-1.319-.217l-.154.694c.309.147.926.28 1.46.28 1.382 0 1.641-.455 1.641-1.34v.001zM21.752 33.856c0-.478.203-.73.82-.73.456 0 .884.035 1.312.126l.099-.772c-.421-.112-.961-.154-1.34-.154-1.214 0-1.775.45-1.775 1.41v1.992c0 .927.547 1.41 1.69 1.41.492 0 1.074-.07 1.565-.21v-2.055h-.835v1.417a4.993 4.993 0 0 1-.722.056c-.618 0-.814-.266-.814-.722v-1.768zm14.222 3.213h.925l-1.473-4.673h-1.234l-1.474 4.672h.926l.294-.968h1.733l.302.968zm-1.165-3.943l.638 2.21h-1.29l.652-2.21zm13.738.919l.077 3.024h.905l-.21-4.673h-.99l-1.207 3.319-1.206-3.319h-.99l-.21 4.672h.905l.077-3.023.863 2.42h1.123l.863-2.42zm-25.61 10.588h-.884v4.673h.884v-4.673zm12.601 4.673h1.179v-4.673h-.863v3.55l-1.775-3.55H32.9v4.673h.864v-3.543l1.774 3.543zm10.84-3.213c0-.477.204-.73.822-.73.456 0 .884.035 1.312.127l.098-.772c-.421-.112-.962-.155-1.34-.155-1.214 0-1.775.45-1.775 1.41v1.993c0 .926.547 1.41 1.69 1.41.492 0 1.074-.07 1.565-.21V47.11h-.835v1.417a5.05 5.05 0 0 1-.722.056c-.618 0-.814-.267-.814-.722v-1.768z'
          fill='#FFFFFE'
        />
      </g>
    </S.Svg>
  );
};

export default Sysgaming;
