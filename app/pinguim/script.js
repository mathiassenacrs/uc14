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
    //--------Callback MQTT------
    function processarDados(topic, data, broker = null) {
      console.log("Broker: ", broker);
      console.log("Topic: ", topic);
      console.log("payload: ", data);
      if (broker == "HiveMQ" && topic.split("/")[1] == "device_1") {
        //mqtt.hivemq.obj.publish(topic.split("/")[0] + "/teste", "ok");
        //mqtt.crematec.obj.unSubscribeAll();
      }
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