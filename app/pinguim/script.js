    let mqtt = {
      hivemq: {
        host: "broker.hivemq.com",
        port: 8884,
        options: {
          user: "",
          password: "",
          ssl: true,
          topics: ["mathias3009/device_1/pinguim/temperatura"],
          onData: (topic, data) => processarDados(topic, data, "HiveMQ"),
          onConnectSuccess: () => onConnectSuccess("HiveMQ")
        },
        obj: null
      }
    };

    //--------Conectado Sucesso MQTT------
    function onConnectSuccess(broker) {
      console.log("Mqtt conectado ao broker: ", broker);
    }
  
    //Conectando ao broker HiveMQ
    mqtt.hivemq.obj = new MqttService(
      mqtt.hivemq.host,
      mqtt.hivemq.port,
      mqtt.hivemq.options
    );
    mqtt.hivemq.obj.connect();
	
    /*setTimeout(() => {
      mqtt.crematec.obj.subscribe(["device_1/motores/motoresJson"]);
    }, 10000);*/