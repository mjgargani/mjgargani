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
    <>
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
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <img className="w-full" src={repo.metaData?.gallery[0]} alt={`Thumbnail do projeto '${repo.name}'`} />
            <div className="px-6 pt-4 pb-2">
              <Icon i={repo.metaData?.stack}/>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {repo.name.replace("-"," ").replace("_"," ").toLocaleUpperCase()}
              </div>
              <p className="text-gray-700 text-base">
                {mdParser(repo.description)}
              </p>
            </div>
          </div>
        </a>
      ) : (
        <div>...</div>
      )}
    </>
  );
};

export default Card;
