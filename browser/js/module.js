'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function ($stateProvider) {
  // define a something state
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '../albumList.html',
    controller: 'AlbumsCtrl',
    resolve: {
      albums: function(AlbumFactory){
        console.log(AlbumFactory);
        return AlbumFactory.fetchAll();
      }
    }
  });

   $stateProvider.state('allArtists', {
    url: '/artists',
    templateUrl: '../artists.html',
    controller: 'ArtistsCtrl',
    resolve: {
      artists: function(ArtistFactory){
        console.log(ArtistFactory)
        return ArtistFactory.fetchAll();
      }
    }
  });

    $stateProvider.state('albumX', {
    url: '/album/:id',
    templateUrl: '../album.html',
    controller: 'AlbumCtrl',
    resolve:{
      album: function(AlbumFactory){
        return AlbumFactory.fetchById($stateParams.id);
      }
    }
  });

    $stateProvider.state('artistX', {
    url: '/artist/:id',
    templateUrl: '../artist.html',
    controller:'ArtistCtrl'
  });

    $stateProvider.state('artistX.albums', {
    url: '/artist/:id/albums',
    templateUrl: '../artist-albums.html'

  });
    $stateProvider.state('artistX.songs', {
    url: '/artist/:id/songs',
    templateUrl: '../artist-songs.html'

  });

});