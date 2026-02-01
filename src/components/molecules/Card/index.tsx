import Icon from '@/components/atoms/Icon';
import randomId from '../../../utils/randomId';
import { type CardProps } from './types';
import React from 'react';
import mdParser from '../../../utils/mdParser';

const Card: React.FC<CardProps> = ({
  dataTestId = randomId('card'),
  repo
}) => {
  return (
    <div className="item max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
      {repo?.name ? (
        <a
          data-testid={dataTestId}
          className="card-link"
          href={`${repo.html_url}/#README.md`}
          target="_blank"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
          rel="noreferrer"
        >
          <div className='flex flex-col h-full min-h-72'>
            <div
              className='min-h-1/2 bg-cover bg-no-repeat bg-center shadow-lg'
              style={{
              backgroundImage: `url(${repo.metaData?.gallery[0]})`,
              userSelect: 'none',
              }}
              role="img"
              aria-label={`Thumbnail do projeto '${repo.name}'`}
            />
            <div className='min-h-1/2'>
              <div className="min-h-1/12 p-3 flex gap-2 justify-center">
                <Icon i={repo.metaData?.stack}/>
              </div>
              <div className="min-h-11/12 px-3 pb-3">
                <div className="font-bold text-xl mb-2">
                {repo.name.replace("-"," ").replace("_"," ").toLocaleUpperCase()}
                </div>
                {mdParser(repo.description)}
              </div>
            </div>
          </div>
        </a>
      ) : (
        <span className='m-4'><Icon i={"loading"} /></span>
      )}
    </div>
  );
};

export default Card;
