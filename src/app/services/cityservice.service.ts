import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CityData } from '../models/city';
import { Marker, Attributes } from '../models/marker';

const cityData: CityData[] = [
  {
    id: 4452253,
    name: 'Advance',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.94125,
      lon: -80.409218,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452253',
    method: null,
    rel: null,
  },
  {
    id: 4452256,
    name: 'Ahoskie',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.286819,
      lon: -76.98468,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452256',
    method: null,
    rel: null,
  },
  {
    id: 4452290,
    name: 'Alamance County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.03347,
      lon: -79.399742,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452290',
    method: null,
    rel: null,
  },
  {
    id: 4452303,
    name: 'Albemarle',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.35014,
      lon: -80.200058,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452303',
    method: null,
    rel: null,
  },
  {
    id: 4452655,
    name: 'Andrews',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.201752,
      lon: -83.824074,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452655',
    method: null,
    rel: null,
  },
  {
    id: 4452686,
    name: 'Angier',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.507099,
      lon: -78.739182,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452686',
    method: null,
    rel: null,
  },
  {
    id: 4452708,
    name: 'Anson County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.98349,
      lon: -80.099777,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452708',
    method: null,
    rel: null,
  },
  {
    id: 4452808,
    name: 'Apex',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.732651,
      lon: -78.850288,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452808',
    method: null,
    rel: null,
  },
  {
    id: 4452848,
    name: 'Arapahoe',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.025719,
      lon: -76.825493,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452848',
    method: null,
    rel: null,
  },
  {
    id: 4452871,
    name: 'Archdale',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.914581,
      lon: -79.971977,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452871',
    method: null,
    rel: null,
  },
  {
    id: 4452878,
    name: 'Archer Lodge',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.694038,
      lon: -78.375557,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4452878',
    method: null,
    rel: null,
  },
  {
    id: 4453035,
    name: 'Asheboro',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.707909,
      lon: -79.813637,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453035',
    method: null,
    rel: null,
  },
  {
    id: 4453066,
    name: 'Asheville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.600948,
      lon: -82.554024,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453066',
    method: null,
    rel: null,
  },
  {
    id: 4453145,
    name: 'Atlantic Beach',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.699051,
      lon: -76.740211,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453145',
    method: null,
    rel: null,
  },
  {
    id: 4453238,
    name: 'Avery Creek',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.463451,
      lon: -82.582619,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453238',
    method: null,
    rel: null,
  },
  {
    id: 4453271,
    name: 'Ayden',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.47266,
      lon: -77.41552,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453271',
    method: null,
    rel: null,
  },
  {
    id: 4453351,
    name: 'Badin',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.405972,
      lon: -80.116722,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453351',
    method: null,
    rel: null,
  },
  {
    id: 4453467,
    name: 'Bakersville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.015671,
      lon: -82.158737,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453467',
    method: null,
    rel: null,
  },
  {
    id: 4453570,
    name: 'Balfour',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.346512,
      lon: -82.472061,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453570',
    method: null,
    rel: null,
  },
  {
    id: 4453688,
    name: 'Banner Elk',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.163181,
      lon: -81.871498,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453688',
    method: null,
    rel: null,
  },
  {
    id: 4453706,
    name: 'Barbecue',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.335991,
      lon: -79.038643,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453706',
    method: null,
    rel: null,
  },
  {
    id: 4453732,
    name: 'Barclaysville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.468769,
      lon: -78.694183,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453732',
    method: null,
    rel: null,
  },
  {
    id: 4453753,
    name: 'Barium Springs',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.719028,
      lon: -80.898132,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453753',
    method: null,
    rel: null,
  },
  {
    id: 4453759,
    name: 'Barker Heights',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.31123,
      lon: -82.444008,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4453759',
    method: null,
    rel: null,
  },
  {
    id: 4454022,
    name: 'Bayboro',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.142941,
      lon: -76.77021,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454022',
    method: null,
    rel: null,
  },
  {
    id: 4454034,
    name: 'Bayshore',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.289612,
      lon: -77.787483,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454034',
    method: null,
    rel: null,
  },
  {
    id: 4454214,
    name: 'Bear Poplar',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.675968,
      lon: -80.693398,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454214',
    method: null,
    rel: null,
  },
  {
    id: 4454370,
    name: 'Beaufort',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.71822,
      lon: -76.663818,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454370',
    method: null,
    rel: null,
  },
  {
    id: 4454373,
    name: 'Beaufort County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.433498,
      lon: -76.866333,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454373',
    method: null,
    rel: null,
  },
  {
    id: 4454761,
    name: 'Belhaven',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.540169,
      lon: -76.622993,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454761',
    method: null,
    rel: null,
  },
  {
    id: 4454860,
    name: 'Belmont',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.24292,
      lon: -81.0373,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454860',
    method: null,
    rel: null,
  },
  {
    id: 4454893,
    name: 'Belville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.230728,
      lon: -77.96582,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454893',
    method: null,
    rel: null,
  },
  {
    id: 4454971,
    name: 'Benson',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.382111,
      lon: -78.548622,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454971',
    method: null,
    rel: null,
  },
  {
    id: 4454988,
    name: 'Bent Creek',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.508999,
      lon: -82.607903,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4454988',
    method: null,
    rel: null,
  },
  {
    id: 4455042,
    name: 'Bermuda Run',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.00375,
      lon: -80.421997,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4455042',
    method: null,
    rel: null,
  },
  {
    id: 4455080,
    name: 'Bessemer City',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.284859,
      lon: -81.283974,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4455080',
    method: null,
    rel: null,
  },
  {
    id: 4455171,
    name: 'Bethel',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.807098,
      lon: -77.37886,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4455171',
    method: null,
    rel: null,
  },
  {
    id: 4455335,
    name: 'Bethlehem',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.825691,
      lon: -81.30703,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4455335',
    method: null,
    rel: null,
  },
  {
    id: 4455473,
    name: 'Beulaville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.923779,
      lon: -77.773872,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4455473',
    method: null,
    rel: null,
  },
  {
    id: 4455999,
    name: 'Biltmore Forest',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.533718,
      lon: -82.528458,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4455999',
    method: null,
    rel: null,
  },
  {
    id: 4456054,
    name: 'Biscoe',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.359859,
      lon: -79.779762,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456054',
    method: null,
    rel: null,
  },
  {
    id: 4456121,
    name: 'Black Mountain',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.617901,
      lon: -82.321228,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456121',
    method: null,
    rel: null,
  },
  {
    id: 4456253,
    name: 'Bladenboro',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.53878,
      lon: -78.787521,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456253',
    method: null,
    rel: null,
  },
  {
    id: 4456376,
    name: 'Blowing Rock',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.135132,
      lon: -81.677612,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456376',
    method: null,
    rel: null,
  },
  {
    id: 4456593,
    name: 'Boiling Spring Lakes',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.030449,
      lon: -78.067207,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456593',
    method: null,
    rel: null,
  },
  {
    id: 4456595,
    name: 'Boiling Springs',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.254292,
      lon: -81.667038,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456595',
    method: null,
    rel: null,
  },
  {
    id: 4456615,
    name: 'Bolivia',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.067669,
      lon: -78.148331,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456615',
    method: null,
    rel: null,
  },
  {
    id: 4456703,
    name: 'Boone',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.216801,
      lon: -81.674553,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456703',
    method: null,
    rel: null,
  },
  {
    id: 4456748,
    name: 'Boonville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.232639,
      lon: -80.708122,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456748',
    method: null,
    rel: null,
  },
  {
    id: 4456938,
    name: 'Brake',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.92321,
      lon: -77.737747,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4456938',
    method: null,
    rel: null,
  },
  {
    id: 4457040,
    name: 'Brevard',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.233452,
      lon: -82.734291,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457040',
    method: null,
    rel: null,
  },
  {
    id: 4457089,
    name: 'Brices Creek',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.055988,
      lon: -77.08773,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457089',
    method: null,
    rel: null,
  },
  {
    id: 4457102,
    name: 'Brickhaven',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.574879,
      lon: -79.028908,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457102',
    method: null,
    rel: null,
  },
  {
    id: 4457289,
    name: 'Broad Creek',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.720718,
      lon: -76.936333,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457289',
    method: null,
    rel: null,
  },
  {
    id: 4457325,
    name: 'Broadway',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.457932,
      lon: -79.053078,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457325',
    method: null,
    rel: null,
  },
  {
    id: 4457342,
    name: 'Brogden',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.29266,
      lon: -78.034431,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457342',
    method: null,
    rel: null,
  },
  {
    id: 4457578,
    name: 'Brunswick',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.286839,
      lon: -78.701134,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457578',
    method: null,
    rel: null,
  },
  {
    id: 4457580,
    name: 'Brunswick County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.066841,
      lon: -78.266388,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457580',
    method: null,
    rel: null,
  },
  {
    id: 4457719,
    name: 'Bryson City',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.430931,
      lon: -83.44738,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4457719',
    method: null,
    rel: null,
  },
  {
    id: 4458033,
    name: 'Buies Creek',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.413219,
      lon: -78.735573,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458033',
    method: null,
    rel: null,
  },
  {
    id: 4458155,
    name: 'Buncombe County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.600109,
      lon: -82.51651,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458155',
    method: null,
    rel: null,
  },
  {
    id: 4458175,
    name: 'Burgaw',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.552109,
      lon: -77.926102,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458175',
    method: null,
    rel: null,
  },
  {
    id: 4458194,
    name: 'Burke County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.7668,
      lon: -81.699821,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458194',
    method: null,
    rel: null,
  },
  {
    id: 4458228,
    name: 'Burlington',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.095692,
      lon: -79.437798,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458228',
    method: null,
    rel: null,
  },
  {
    id: 4458264,
    name: 'Burnsville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.11237,
      lon: -80.244507,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458264',
    method: null,
    rel: null,
  },
  {
    id: 4458265,
    name: 'Burnsville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.917339,
      lon: -82.300957,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458265',
    method: null,
    rel: null,
  },
  {
    id: 4458372,
    name: 'Butner',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.132092,
      lon: -78.756668,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458372',
    method: null,
    rel: null,
  },
  {
    id: 4458391,
    name: 'Buxton',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.267681,
      lon: -75.542374,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458391',
    method: null,
    rel: null,
  },
  {
    id: 4458491,
    name: 'Cabarrus County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.36681,
      lon: -80.56646,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458491',
    method: null,
    rel: null,
  },
  {
    id: 4458580,
    name: 'Cajahs Mountain',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.83485,
      lon: -81.541481,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458580',
    method: null,
    rel: null,
  },
  {
    id: 4458584,
    name: 'Calabash',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 33.90369,
      lon: -78.573883,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458584',
    method: null,
    rel: null,
  },
  {
    id: 4458601,
    name: 'Caldwell County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.95013,
      lon: -81.54982,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458601',
    method: null,
    rel: null,
  },
  {
    id: 4458737,
    name: 'Camden',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.328491,
      lon: -76.171883,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458737',
    method: null,
    rel: null,
  },
  {
    id: 4458740,
    name: 'Camden County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.366821,
      lon: -76.182991,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4458740',
    method: null,
    rel: null,
  },
  {
    id: 4459120,
    name: 'Canton',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.532879,
      lon: -82.837357,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459120',
    method: null,
    rel: null,
  },
  {
    id: 4459135,
    name: 'Cape Carteret',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.691551,
      lon: -77.063004,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459135',
    method: null,
    rel: null,
  },
  {
    id: 4459138,
    name: 'Cape Colony',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.019611,
      lon: -76.581612,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459138',
    method: null,
    rel: null,
  },
  {
    id: 4459261,
    name: 'Carolina Beach',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.035172,
      lon: -77.8936,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459261',
    method: null,
    rel: null,
  },
  {
    id: 4459298,
    name: 'Carolina Shores',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 33.901009,
      lon: -78.580566,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459298',
    method: null,
    rel: null,
  },
  {
    id: 4459343,
    name: 'Carrboro',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.910141,
      lon: -79.075287,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459343',
    method: null,
    rel: null,
  },
  {
    id: 4459410,
    name: 'Carteret County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.800159,
      lon: -76.699654,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459410',
    method: null,
    rel: null,
  },
  {
    id: 4459426,
    name: 'Carthage',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.345989,
      lon: -79.416969,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459426',
    method: null,
    rel: null,
  },
  {
    id: 4459467,
    name: 'Cary',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.791538,
      lon: -78.78112,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459467',
    method: null,
    rel: null,
  },
  {
    id: 4459530,
    name: 'Castle Hayne',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.355721,
      lon: -77.899986,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459530',
    method: null,
    rel: null,
  },
  {
    id: 4459547,
    name: 'Caswell County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.400139,
      lon: -79.349739,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459547',
    method: null,
    rel: null,
  },
  {
    id: 4459575,
    name: 'Catawba County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.666801,
      lon: -81.233139,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459575',
    method: null,
    rel: null,
  },
  {
    id: 4459620,
    name: 'Catherine Lake',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.817661,
      lon: -77.563858,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459620',
    method: null,
    rel: null,
  },
  {
    id: 4459775,
    name: 'Cedar Grove',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.67569,
      lon: -79.888649,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459775',
    method: null,
    rel: null,
  },
  {
    id: 4459889,
    name: 'Cedar Point',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.68766,
      lon: -77.072449,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4459889',
    method: null,
    rel: null,
  },
  {
    id: 4460084,
    name: 'Chadbourn',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.322109,
      lon: -78.826973,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460084',
    method: null,
    rel: null,
  },
  {
    id: 4460162,
    name: 'Chapel Hill',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.9132,
      lon: -79.05584,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460162',
    method: null,
    rel: null,
  },
  {
    id: 4460243,
    name: 'Charlotte',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.227089,
      lon: -80.843132,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460243',
    method: null,
    rel: null,
  },
  {
    id: 7230311,
    name: 'Charter Oaks Mobile Home Park',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 34.126202,
      lon: -77.902702,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/7230311',
    method: null,
    rel: null,
  },
  {
    id: 4460324,
    name: 'Chatham County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.700142,
      lon: -79.266411,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460324',
    method: null,
    rel: null,
  },
  {
    id: 4460364,
    name: 'Cherokee',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.47427,
      lon: -83.314873,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460364',
    method: null,
    rel: null,
  },
  {
    id: 4460465,
    name: 'Cherryville',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.378738,
      lon: -81.378967,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460465',
    method: null,
    rel: null,
  },
  {
    id: 4460651,
    name: 'China Grove',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.569309,
      lon: -80.581734,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460651',
    method: null,
    rel: null,
  },
  {
    id: 4460702,
    name: 'Chowan County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 36.150162,
      lon: -76.649673,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460702',
    method: null,
    rel: null,
  },
  {
    id: 4460831,
    name: 'Claremont',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.714581,
      lon: -81.146187,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460831',
    method: null,
    rel: null,
  },
  {
    id: 4460927,
    name: 'Clay County',
    state: 'NC',
    country: 'US',
    coord: {
      lat: 35.050091,
      lon: -83.766563,
    },
    href: 'https://line-ready-api.azurewebsites.net/cities/4460927',
    method: null,
    rel: null,
  },
];

const markers: Marker[] = [];

@Injectable({
  providedIn: 'root',
})
export class CityService {
  marker: Marker;

  getCityData = (): Marker[] => {
    for (const element of cityData) {
      this.marker = new Marker();
      this.marker.coordinates = [element.coord.lon, element.coord.lat];
      this.marker.attributes = new Attributes();
      this.marker.attributes.name = element.name + ', ' + element.state;
      markers.push(this.marker);
    }

    return markers;
  };

  constructor() {}
}
