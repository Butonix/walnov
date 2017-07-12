class Constantes{
    static get Wall(){return Wall;}
    static get Historia(){return Historia;}
    static get Notificacion(){return Notificacion;}
    static get Usuario(){return Usuario;}
}

class Wall{
    static get PUBLICADO(){return 1;}
    static get BORRADOR(){return 2;}
    static get PUBLICO(){return 0;}
    static get PRIVADO(){return 1;}
    static get EXCLUSIVO(){return 2;}
}

class Historia{
    static get TIPO_1() {return 10;}
}

class Notificacion{
    static get NUEVO_WALL(){return 1;}
    static get NUEVA_HISTORIA(){return 2;}
    static get CONTINUACION_HISTORIA(){return 3;}
    static get NUEVO_RELATO(){return 4;}
    static get NUEVO_CHAT_STORY(){return 5;}
    static get NUEVA_OPINION_RELATO(){return 6;}
    static get NUEVA_OPINION_CHAT_STORY(){return 7;}
}

class Usuario{
    static get ESTADO_SIN_VERIFICAR(){return 0;}
    static get ESTADO_VERIFICADO(){return 1;}
    static get TIPO_NORMAL(){return 0;}
    static get TIPO_PARTNER(){return 1;}
    static get TIPO_ADMIN(){return 1;}
}

module.exports = Constantes;