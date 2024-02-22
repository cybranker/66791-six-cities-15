import PlaceCard from '../../../../components/common/place-card/place-card';

import {placeCardMocks} from '../../../../components/common/place-card/place-card-mocks';

const NUMBER_OFFERS = 3;

function NearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {placeCardMocks.slice(0, NUMBER_OFFERS).map((placeCardMock) => (
          <PlaceCard
            isNearPlace
            key={placeCardMock.id}
            {...placeCardMock}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
