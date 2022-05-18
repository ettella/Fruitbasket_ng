var app = angular.module( 'app', [])

	app.controller('controller', function($scope)

	    {
			$scope.termekek = [ 
			{ nev: "Alma", ar: "450"}, 
			{ nev: "Citrom", ar: "890"}, 
			{ nev: "Narancs", ar: "200"}, 
			{ nev: "Cseresznye", ar: "890"}, 
			{ nev: "Málna", ar: "390"}, 
			{ nev: "Ribizli", ar: "190"}, 
			{ nev: "Szőlő", ar: "990"}, 
			{ nev: "Sárgadinnye", ar: "290"}, 
			{ nev: "Görögdinnye", ar: "190"}, 
							 ]

			$scope.ertek = '';
			$scope.mennyi = 0;

			
			$scope.button_label = "Kosárba!"

			//KOSÁRBA helyezés:

			$scope.tetel = { termekek:'', db:0}
			$scope.kosar = [];
			$scope.ksr_szrk = false


			//Kosárba tevés funkció:


			$scope.bele = function()
			{
				
				$scope.kosar.push( { ertek:$scope.ertek, db:$scope.mennyi } );
				$scope.kosar_db = $scope.kosar.length;
			}

			$scope.szerk = function()
			{
				$scope.ksr_szrk = true;
				$scope.kosar_copy = angular.copy($scope.kosar);
			}

			$scope.cancel = function()
			{
				$scope.kosar = $scope.kosar_copy;
				$scope.ksr_szrk = false;
			}

			$scope.szerk_bef = function()
			{
				$scope.ksr_szrk = false;
			}

			$scope.torol = function()
			{
				$scope.kosar = [];
				$scope.kosar_db = '';
			}

			$scope.fizet = function()
			{

			}
		}

		)
	
	