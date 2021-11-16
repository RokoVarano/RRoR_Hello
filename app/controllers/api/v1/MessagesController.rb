module Api
  module V1
    class MessagesController < ApplicationController
      def index
        message = Message.find(rand(1..5))

        render json: MessageSerializer.new(message).serializable_hash.to_json
      end
    end
  end
end