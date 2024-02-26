import Meta from '../../components/common/meta';
import Header from '../../components/common/header';
import PlaceCard from '../../components/common/place-card';
import Map from '../../components/common/map';
import Tabs from './components/tabs';
import PlacesFound from './components/places-found';
import PlacesSorting from './components/places-sorting';

import {placeCardMocks} from '../../mocks';

type HomeScreenProps = {
  cities: string[];
}

function HomeScreen({cities}: HomeScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Meta titleText={`6/Cities. ${placeCardMocks.length} places to stay in Amsterdam`} />
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound numberOffers={placeCardMocks.length} />
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {placeCardMocks.map((placeCardMock) => (
                  <PlaceCard
                    key={placeCardMock.id}
                    {...placeCardMock}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map isMainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
